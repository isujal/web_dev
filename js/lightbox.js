/* The Ducktators · photo viewer (homepage gallery + Updates page)
   ------------------------------------------------------------------
   Opens instantly: the small preview already on the page is shown at once, blurred,
   and the full-resolution photo fades in over it as soon as it has downloaded and decoded.
   Arrows, swipe and the keyboard move between photos; the page behind does not scroll.

   Use:  Lightbox.open([{ src, thumb, alt }, ...], startIndex, triggerElement)
         Lightbox.prefetch(src)   // call on hover / touchstart so the photo is ready before the tap
   ------------------------------------------------------------------ */
(() => {
  const cache = new Map();                    // src -> Promise<HTMLImageElement> (decoded)
  const load = src => {
    if (!cache.has(src)) {
      const img = new Image(); img.decoding = 'async'; img.src = src;
      cache.set(src, (img.decode ? img.decode() : new Promise((ok, fail) => { img.onload = ok; img.onerror = fail; }))
        .then(() => img).catch(() => { cache.delete(src); throw new Error('Could not load ' + src); }));
    }
    return cache.get(src);
  };

  const el = document.createElement('dialog');
  el.className = 'lbx'; el.setAttribute('aria-label', 'Photo viewer');
  el.innerHTML = `
    <div class="lbx__stage" data-lbx-stage>
      <img class="lbx__ph" alt="" aria-hidden="true" data-lbx-ph>
      <img class="lbx__img" alt="" data-lbx-img>
      <span class="lbx__spin" aria-hidden="true" data-lbx-spin></span>
    </div>
    <p class="lbx__cap"><span data-lbx-cap></span><span class="lbx__count" data-lbx-count></span></p>
    <button class="liquid-glass lbx__btn lbx__close" type="button" data-lbx-close aria-label="Close photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    <button class="liquid-glass lbx__btn lbx__nav lbx__prev" type="button" data-lbx-prev aria-label="Previous photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>
    <button class="liquid-glass lbx__btn lbx__nav lbx__next" type="button" data-lbx-next aria-label="Next photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
    <p class="lbx__err" data-lbx-err hidden>This photo could not load. Check your connection and try again.</p>`;
  const q = s => el.querySelector(s);
  const stage = q('[data-lbx-stage]'), ph = q('[data-lbx-ph]'), img = q('[data-lbx-img]'), spin = q('[data-lbx-spin]');
  const cap = q('[data-lbx-cap]'), count = q('[data-lbx-count]'), prev = q('[data-lbx-prev]'), next = q('[data-lbx-next]'), err = q('[data-lbx-err]');

  let items = [], index = 0, trigger = null, token = 0;

  const show = i => {
    index = (i + items.length) % items.length;
    const it = items[index], mine = ++token;
    cap.textContent = it.alt || '';
    count.textContent = items.length > 1 ? `${index + 1} / ${items.length}` : '';
    err.hidden = true;
    // 1. the preview, at once (it is already in the browser cache because the page shows it)
    ph.src = it.thumb || it.src; ph.classList.add('is-on');
    img.classList.remove('is-on'); el.classList.add('is-loading');
    // 2. the full photo, fades in when decoded
    load(it.src).then(full => {
      if (mine !== token) return;
      img.src = full.src; img.alt = it.alt || '';
      img.classList.add('is-on'); el.classList.remove('is-loading');
      setTimeout(() => { if (mine === token) ph.classList.remove('is-on'); }, 260);
    }).catch(() => { if (mine === token) { el.classList.remove('is-loading'); err.hidden = false; } });
    // 3. get the neighbours ready
    if (items.length > 1) { load(items[(index + 1) % items.length].src).catch(() => {}); load(items[(index - 1 + items.length) % items.length].src).catch(() => {}); }
  };

  const lock = on => {
    document.documentElement.classList.toggle('lbx-open', on);
    const l = window.__lenis; if (l) on ? l.stop() : l.start();
  };

  const open = (list, i = 0, from = null) => {
    if (!el.isConnected) { document.body.append(el); el.querySelectorAll('.lbx__btn').forEach(b => window.LiquidGlass?.attach(b)); }
    items = list.filter(x => x && x.src); if (!items.length) return;
    trigger = from;
    el.classList.toggle('is-single', items.length < 2);
    show(i); lock(true);
    if (!el.open) el.showModal();
    q('[data-lbx-close]').focus({ preventScroll: true });
  };
  const close = () => { if (el.open) el.close(); };
  el.addEventListener('close', () => { lock(false); token++; trigger?.focus?.({ preventScroll: true }); });

  q('[data-lbx-close]').addEventListener('click', close);
  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));
  el.addEventListener('click', e => { if (e.target === el || e.target === stage) close(); });
  el.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && items.length > 1) { e.preventDefault(); show(index + 1); }
    if (e.key === 'ArrowLeft' && items.length > 1) { e.preventDefault(); show(index - 1); }
  });
  // swipe left / right to move, swipe down to close
  let sx = 0, sy = 0, sw = false;
  stage.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') return; sx = e.clientX; sy = e.clientY; sw = true; });
  stage.addEventListener('pointerup', e => {
    if (!sw) return; sw = false;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && items.length > 1) show(index + (dx < 0 ? 1 : -1));
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();
  });
  stage.addEventListener('pointercancel', () => { sw = false; });

  window.Lightbox = { open, close, prefetch: src => load(src).catch(() => {}) };
})();
