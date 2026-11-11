/*!
 * Liquid Glass — refraction layer, vanilla JS port (The Ducktators site).
 *
 * Ported from the liquid-glass skill's Angular directive (assets/liquid-glass.directive.ts,
 * github.com/stormaref/LiquidGlassSkill). The refraction field is a port of the fragment
 * shader in liquid-glass-js (https://github.com/dashersw/liquid-glass-js) — Copyright (c)
 * 2025 Armagan Amcalar, MIT. Permission is hereby granted, free of charge, to any person
 * obtaining a copy of that software to deal in it without restriction, provided this notice
 * travels with it; it is provided "as is", without warranty of any kind. Keep this header
 * on any copy or port.
 *
 * Pair with the `.liquid-glass` class from css/liquid-glass.css:
 *   <div class="liquid-glass" data-liquid-glass>…</div>
 * Elements present at load are picked up automatically; call LiquidGlass.attach(el) for
 * elements created later. Chromium only (SVG-referenced backdrop filters); everywhere else
 * this does nothing and the stylesheet's frosted `backdrop-filter: blur()` fallback stays.
 */
(() => {
  /* Mirrors the shader uniforms of liquid-glass-js; tuned there, do not "improve" by eye. */
  const GLASS_PRESET = {
    edgeIntensity: 0.015, rimIntensity: 0.028, baseIntensity: 0.05,
    edgeDistance: 0.5, rimDistance: 1.7, baseDistance: 0.2,
    cornerBoost: 0.06, rippleEffect: 0.26, blurRadius: 2,
    warp: false, // center distortion off: text in the middle of a panel stays readable
  };
  const SUPERSAMPLE = 2;           // the rim lives in 1–2 px; a 1x map smears it
  const MAX_MAP_EDGE = 1400;       // bound the bake for wide surfaces (topbar)
  const BLUR_STD_PER_RADIUS = 0.35;
  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* Gate on engine: Safari parses `backdrop-filter: url()` but paints nothing, so @supports lies. */
  const supported = (() => {
    const brands = navigator.userAgentData && navigator.userAgentData.brands;
    if (brands) return brands.some(b => /Chromium|Google Chrome|Microsoft Edge/i.test(b.brand));
    return /Chrome\//.test(navigator.userAgent);
  })();

  const filters = new Map(); // key -> { id, node, refs }; same-size surfaces share one filter
  let defs = null, nextId = 0;
  const ensureDefs = () => {
    if (!defs || !defs.isConnected) {
      const svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('width', '0'); svg.setAttribute('height', '0'); svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'fixed';
      svg.appendChild(document.createElementNS(SVG_NS, 'defs'));
      document.body.appendChild(svg);
      defs = svg;
    }
    return defs;
  };

  const clampByte = v => Math.max(0, Math.min(255, Math.round(v)));
  const resolveRadius = (computed, w, h) => {
    const value = parseFloat(computed) || 0;
    return computed.trim().endsWith('%') ? (value / 100) * Math.min(w, h) : value;
  };

  function buildDisplacementMap(w, h, radius, pageW, pageH, cfg) {
    const ss = Math.max(0.25, Math.min(SUPERSAMPLE, MAX_MAP_EDGE / Math.max(w, h)));
    const bw = Math.max(1, Math.round(w * ss)), bh = Math.max(1, Math.round(h * ss));
    const r = radius * ss, minDim = Math.min(w, h);
    const dx = new Float32Array(bw * bh), dy = new Float32Array(bw * bh);
    let maxAbs = 0;
    for (let py = 0; py < bh; py++) {
      for (let px = 0; px < bw; px++) {
        const cx = (px + 0.5) / bw, cy = (py + 0.5) / bh;
        // signed distance to the rounded-rect edge (supersampled px -> CSS px)
        const tx = Math.abs(px + 0.5 - bw / 2) - (bw / 2 - r);
        const ty = Math.abs(py + 0.5 - bh / 2) - (bh / 2 - r);
        const outside = Math.hypot(Math.max(tx, 0), Math.max(ty, 0));
        const inside = Math.min(Math.max(tx, ty), 0);
        const distPx = Math.max(-(outside + inside - r), 0) / ss;
        const edgeFall = Math.exp(-distPx * cfg.edgeDistance);
        const rimFall = Math.exp(-distPx * cfg.rimDistance);
        const baseFall = 1 - Math.exp(-distPx * cfg.baseDistance);
        const total = (cfg.warp ? baseFall * cfg.baseIntensity : 0) + edgeFall * cfg.edgeIntensity + rimFall * cfg.rimIntensity;
        let nx = cx - 0.5, ny = cy - 0.5; const len = Math.hypot(nx, ny);
        if (len > 0) { nx /= len; ny /= len; }
        const cornerNorm = Math.max(Math.min(cx, 1 - cx), Math.min(cy, 1 - cy)) * minDim;
        const corner = Math.exp(-cornerNorm * 0.3) * cfg.cornerBoost;
        const ripple = Math.sin((distPx / minDim) * 25) * cfg.rippleEffect * rimFall;
        const fx = (nx * (total + corner) - ny * ripple) * pageW;   // page-texture fractions -> px
        const fy = (ny * (total + corner) + nx * ripple) * pageH;
        const i = py * bw + px; dx[i] = fx; dy[i] = fy;
        maxAbs = Math.max(maxAbs, Math.abs(fx), Math.abs(fy));
      }
    }
    const scale = Math.max(maxAbs * 2, 1e-4);
    const bias = scale * (128 / 255 - 0.5); // 128 is not zero for feDisplacementMap: pre-subtract the decode bias
    const canvas = document.createElement('canvas'); canvas.width = bw; canvas.height = bh;
    const ctx = canvas.getContext('2d'), image = ctx.createImageData(bw, bh), data = image.data;
    for (let i = 0; i < bw * bh; i++) {
      data[i * 4] = clampByte(255 * (0.5 + (dx[i] - bias) / scale));
      data[i * 4 + 1] = clampByte(255 * (0.5 + (dy[i] - bias) / scale));
      data[i * 4 + 2] = 128; data[i * 4 + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
    return { mapUrl: canvas.toDataURL('image/png'), scale };
  }

  function acquireFilter(key, w, h, radius, pageW, pageH, cfg) {
    let entry = filters.get(key);
    if (entry && entry.node.isConnected) { entry.refs++; return entry; }
    if (entry) filters.delete(key);
    const { mapUrl, scale } = buildDisplacementMap(w, h, radius, pageW, pageH, cfg);
    const id = 'liquid-glass-' + nextId++;
    const filter = document.createElementNS(SVG_NS, 'filter');
    filter.setAttribute('id', id);
    // region must extend past the box by the field's reach plus blur spread, or corners clip
    const marginPx = scale / 2 + 3 * cfg.blurRadius * BLUR_STD_PER_RADIUS;
    const mx = (marginPx / w) * 100, my = (marginPx / h) * 100;
    filter.setAttribute('x', -mx + '%'); filter.setAttribute('y', -my + '%');
    filter.setAttribute('width', 100 + 2 * mx + '%'); filter.setAttribute('height', 100 + 2 * my + '%');
    filter.setAttribute('color-interpolation-filters', 'sRGB');
    const feImage = document.createElementNS(SVG_NS, 'feImage');
    for (const [k, v] of [['href', mapUrl], ['x', '0'], ['y', '0'], ['width', String(w)], ['height', String(h)], ['preserveAspectRatio', 'none'], ['result', 'map']]) feImage.setAttribute(k, v);
    const feDisp = document.createElementNS(SVG_NS, 'feDisplacementMap');
    for (const [k, v] of [['in', 'SourceGraphic'], ['in2', 'map'], ['scale', String(scale)], ['xChannelSelector', 'R'], ['yChannelSelector', 'G'], ['result', 'displaced']]) feDisp.setAttribute(k, v);
    const feBlur = document.createElementNS(SVG_NS, 'feGaussianBlur');
    feBlur.setAttribute('in', 'displaced'); feBlur.setAttribute('stdDeviation', String(cfg.blurRadius * BLUR_STD_PER_RADIUS));
    filter.append(feImage, feDisp, feBlur);
    ensureDefs().querySelector('defs').appendChild(filter);
    entry = { id, node: filter, refs: 1 };
    filters.set(key, entry);
    return entry;
  }

  const instances = new WeakMap();
  function attach(el, config) {
    if (!supported || !el || instances.has(el)) return;
    const st = { key: null, raf: 0, debounce: 0 };
    const cfg = Object.assign({}, GLASS_PRESET, config || {});
    const release = () => {
      if (!st.key) return;
      const key = st.key, entry = filters.get(key); st.key = null;
      if (entry && --entry.refs <= 0) { filters.delete(key); entry.node.remove(); } // refcounted: drop the node at zero
    };
    const rebuild = () => {
      const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
      if (w < 2 || h < 2) return;
      const radius = Math.min(resolveRadius(getComputedStyle(el).borderTopLeftRadius, w, h), Math.min(w, h) / 2);
      const pageW = window.innerWidth, pageH = window.innerHeight;
      const key = [w, h, radius, pageW, pageH, JSON.stringify(cfg)].join('|');
      if (key === st.key) return;
      release();
      const entry = acquireFilter(key, w, h, radius, pageW, pageH, cfg);
      st.key = key;
      el.style.backdropFilter = 'url(#' + entry.id + ')';
      el.style.webkitBackdropFilter = 'url(#' + entry.id + ')';
      el.classList.add('is-refracting');
    };
    const schedule = () => { cancelAnimationFrame(st.raf); st.raf = requestAnimationFrame(rebuild); };
    const onWindowResize = () => { clearTimeout(st.debounce); st.debounce = setTimeout(schedule, 180); }; // viewport size feeds every map
    const ro = new ResizeObserver(schedule); ro.observe(el);
    window.addEventListener('resize', onWindowResize, { passive: true });
    schedule();
    instances.set(el, () => { ro.disconnect(); window.removeEventListener('resize', onWindowResize); clearTimeout(st.debounce); cancelAnimationFrame(st.raf); release(); el.style.backdropFilter = ''; el.style.webkitBackdropFilter = ''; el.classList.remove('is-refracting'); });
  }
  function detach(el) { const off = instances.get(el); if (off) { off(); instances.delete(el); } }

  window.LiquidGlass = { attach, detach, supported };
  // optional per-element overrides of the preset: data-liquid-glass='{"blurRadius":10}'
  const readConfig = el => { try { return el.dataset.liquidGlass ? JSON.parse(el.dataset.liquidGlass) : null; } catch { return null; } };
  const init = () => document.querySelectorAll('[data-liquid-glass]').forEach(el => attach(el, readConfig(el)));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
