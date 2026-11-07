/* The Ducktators · FRC 11745 · site behaviour
   GSAP + ScrollTrigger for choreography, Lenis for smooth scroll, canvas for terrain + robot. */

/* ---------- EDIT ME: team details (leave '' until confirmed) ---------- */
const SITE = {
  email: '',          // e.g. 'ducktators11745@gmail.com'
  instagram: '',      // handle without @, e.g. 'frc11745'
  kickoff: '',        // ISO date-time once FIRST announces it, e.g. '2027-01-09T21:30:00+05:30'
  formEndpoint: '',   // optional: a Formspree / Google Apps Script URL that accepts POST JSON
};

(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger);
  const fine = matchMedia('(pointer: fine)').matches;
  if (reduce || !hasGsap) root.classList.add('no-anim');

  // Liquid glass refraction only where backdrop-filter:url() is supported (Chromium desktop)
  const brands = navigator.userAgentData?.brands || [];
  if (brands.some(b => /Chromium|Google Chrome|Edge/.test(b.brand)) && fine && !reduce) root.classList.add('liquid');

  /* ---------- Config wiring ---------- */
  const mailto = (subject) => SITE.email ? `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}` : null;
  document.querySelectorAll('[data-email-text]').forEach(el => { if (SITE.email) el.textContent = SITE.email; });
  document.querySelectorAll('[data-mail]').forEach(a => {
    const kind = a.dataset.mail;
    const href = mailto(kind === 'sponsor' ? 'Sponsorship deck request: The Ducktators FRC 11745' : 'Hello from the website: FRC 11745');
    if (href) a.href = href; else if (a.getAttribute('href') === 'mailto:') a.href = '#contact';
  });
  document.querySelectorAll('[data-social="instagram"]').forEach(a => {
    if (SITE.instagram) { a.href = `https://instagram.com/${SITE.instagram}`; a.querySelector('b').textContent = '@' + SITE.instagram; a.rel = 'noopener'; }
  });

  /* ---------- Mobile drawer ---------- */
  const menuBtn = document.querySelector('[data-menu]');
  const drawer = document.getElementById('drawer');
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    drawer.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    lenis && (open ? lenis.stop() : lenis.start());
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  drawer.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Lenis smooth scroll ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: id === '#top' ? 0 : -70, duration: 1.6 });
    else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', id);
  }));

  /* ---------- Glass specular follows pointer ---------- */
  if (fine) {
    document.addEventListener('pointermove', e => {
      const g = e.target.closest?.('.glass');
      if (!g) return;
      const r = g.getBoundingClientRect();
      g.style.setProperty('--mx', `${e.clientX - r.left}px`);
      g.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------- Nav: hide on scroll down, active section ---------- */
  const nav = document.querySelector('[data-nav]');
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle('is-hidden', y > 400 && y > lastY + 4 && drawer.hidden);
    if (y < lastY - 4 || y < 400) nav.classList.remove('is-hidden');
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });

  const links = [...document.querySelectorAll('.nav__links a')];
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));

  /* ---------- HUD: scene + running timecode (4-minute reel at 24 fps) ---------- */
  const hudScene = document.querySelector('[data-hud-scene]');
  const hudTc = document.querySelector('[data-hud-tc]');
  const RUNTIME = 240, FPS = 24;
  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    const f = Math.round(p * RUNTIME * FPS);
    const s = Math.floor(f / FPS);
    hudTc.textContent = `00:${pad(Math.floor(s / 60))}:${pad(s % 60)}:${pad(f % FPS)}`;
  };
  addEventListener('scroll', tick, { passive: true }); tick();
  const sceneIO = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) hudScene.textContent = en.target.dataset.scene; });
  }, { rootMargin: '-50% 0px -50% 0px' });
  document.querySelectorAll('[data-scene]').forEach(s => sceneIO.observe(s));

  /* ---------- Countdown ---------- */
  const cdVal = document.querySelector('[data-countdown-value]');
  const kickoff = SITE.kickoff ? new Date(SITE.kickoff) : null;
  if (kickoff && !isNaN(kickoff)) {
    const render = () => {
      let ms = kickoff - Date.now();
      if (ms <= 0) { cdVal.textContent = 'Orders unsealed. The 2027 game is live.'; return; }
      const d = Math.floor(ms / 864e5); ms -= d * 864e5;
      const h = Math.floor(ms / 36e5); ms -= h * 36e5;
      const m = Math.floor(ms / 6e4); const s = Math.floor((ms - m * 6e4) / 1000);
      cdVal.innerHTML = `<span class="unit">${d}</span><small>days</small><span class="unit">${pad(h)}</span><small>hrs</small><span class="unit">${pad(m)}</span><small>min</small><span class="unit">${pad(s)}</span><small>sec</small>`;
      setTimeout(render, 1000);
    };
    render();
  }

  /* ---------- Divisions accordion + lens ---------- */
  const divs = [...document.querySelectorAll('.div')];
  const lensIcon = document.querySelector('[data-lens-icon]');
  const lensLabel = document.querySelector('[data-lens-label]');
  const lens = document.querySelector('.lens');
  const openDiv = (d) => {
    divs.forEach(x => { const on = x === d; x.classList.toggle('is-open', on); x.querySelector('.div__head').setAttribute('aria-expanded', String(on)); });
    const swap = () => {
      lensIcon.innerHTML = `<path d="${d.dataset.icon}"/>`;
      lensLabel.textContent = d.querySelector('.div__name').textContent;
      lens.style.setProperty('--tint', d.style.getPropertyValue('--c'));
    };
    if (hasGsap && !reduce) {
      gsap.timeline()
        .to([lensIcon, lensLabel], { opacity: 0, scale: .7, filter: 'blur(8px)', duration: .22, ease: 'power2.in', onComplete: swap })
        .to([lensIcon, lensLabel], { opacity: 1, scale: 1, filter: 'blur(0px)', duration: .5, ease: 'expo.out' });
      gsap.fromTo(lens, { rotate: -8 }, { rotate: 0, duration: .9, ease: 'elastic.out(1,.6)' });
    } else swap();
  };
  divs.forEach(d => d.querySelector('.div__head').addEventListener('click', () => openDiv(d)));
  divs[0].classList.add('is-open');

  /* ---------- Enlistment form ---------- */
  const form = document.querySelector('[data-enlist]');
  const status = form.querySelector('[data-status]');
  const submitBtn = form.querySelector('[data-submit]');
  const showErr = (name, on) => form.querySelector(`[data-err="${name}"]`).closest('.field').classList.toggle('has-error', on);
  const validate = () => {
    const name = form.name.value.trim(), grade = form.grade.value, email = form.email.value.trim();
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    showErr('name', !name); showErr('grade', !grade); showErr('email', !okEmail);
    return name && grade && okEmail;
  };
  ['input', 'change'].forEach(ev => form.addEventListener(ev, e => {
    if (e.target.closest('.has-error')) validate();
  }));
  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.className = 'pass__status';
    if (!validate()) { status.textContent = 'A few fields need attention before you can report for duty.'; status.classList.add('is-err'); form.querySelector('.has-error input, .has-error select')?.focus(); return; }
    const data = {
      name: form.name.value.trim(), grade: form.grade.value, email: form.email.value.trim(),
      divisions: [...form.querySelectorAll('input[name="div"]:checked')].map(i => i.value), note: form.note.value.trim(),
    };
    if (SITE.formEndpoint) {
      submitBtn.disabled = true; submitBtn.textContent = 'Sending orders…';
      try {
        const res = await fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = `Orders received, ${data.name.split(' ')[0]}. A mentor will reply to ${data.email}.`; status.classList.add('is-ok');
      } catch {
        status.textContent = 'That did not go through. Check your connection and try again, or tell a mentor in the Maker Lab.'; status.classList.add('is-err');
      } finally { submitBtn.disabled = false; submitBtn.textContent = 'Report for duty'; }
      return;
    }
    if (SITE.email) {
      const body = `Name: ${data.name}\nGrade: ${data.grade}\nEmail: ${data.email}\nDivisions: ${data.divisions.join(', ') || 'Not sure yet'}\n\n${data.note}`;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Enlistment: ' + data.name)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Your email app should open with your details filled in. Press send to finish.'; status.classList.add('is-ok');
      return;
    }
    status.textContent = 'Online enlistment opens soon. Until then, find a mentor in the CAJCS Maker Lab.';
  });

  /* ---------- Canvas: wireframe terrain (design bible 5.4) ---------- */
  const terrains = [...document.querySelectorAll('[data-terrain]')].map(cv => {
    const ctx = cv.getContext('2d');
    const st = { cv, ctx, t: 1.3, visible: true, w: 0, h: 0 };
    const size = () => { const dpr = Math.min(2, devicePixelRatio || 1); st.w = cv.clientWidth; st.h = cv.clientHeight; cv.width = st.w * dpr; cv.height = st.h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener('resize', size);
    new IntersectionObserver(([en]) => { st.visible = en.isIntersecting; }).observe(cv);
    return st;
  });
  const drawTerrain = (st) => {
    const { ctx, w, h, t } = st;
    const rows = 22, cols = w < 700 ? 26 : 40;
    ctx.clearRect(0, 0, w, h);
    const z = (x, y) => Math.sin(x * .32 + t * .6) * .9 + Math.cos(y * .45 - t * .4) * .8 + Math.sin((x + y) * .18 + t * .25) * 1.3;
    const pts = [];
    for (let r = 0; r < rows; r++) {
      const depth = 1 + r * .55; const row = [];
      for (let c = 0; c < cols; c++) {
        const cx = c - (cols - 1) / 2;
        row.push([w / 2 + (cx * h * .2) / depth * (w / h) * .55, h * .05 + h * .95 / depth - z(cx, r + t) * 16 * (h / 300) / depth]);
      }
      pts.push(row);
    }
    for (let r = rows - 1; r >= 0; r--) {
      const a = .1 + .7 * (1 - r / rows);
      ctx.strokeStyle = `rgba(167,120,255,${a})`; ctx.lineWidth = r < 6 ? 1.6 : 1;
      ctx.beginPath(); pts[r].forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
      if (r < rows - 1) {
        ctx.strokeStyle = `rgba(167,120,255,${a * .6})`; ctx.lineWidth = 1; ctx.beginPath();
        for (let c = 0; c < cols; c++) { ctx.moveTo(...pts[r][c]); ctx.lineTo(...pts[r + 1][c]); }
        ctx.stroke();
      }
    }
  };

  /* ---------- Canvas: rotating wireframe robot chassis ---------- */
  const robotCv = document.querySelector('[data-robot]');
  const robot = (() => {
    const ctx = robotCv.getContext('2d');
    const st = { yaw: .6, pitch: .52, spin: 0, visible: true, w: 0, h: 0 };
    const size = () => { const dpr = Math.min(2, devicePixelRatio || 1); st.w = robotCv.clientWidth; st.h = robotCv.clientHeight; robotCv.width = st.w * dpr; robotCv.height = st.h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener('resize', size);
    new IntersectionObserver(([en]) => { st.visible = en.isIntersecting; }).observe(robotCv);
    // geometry (inches): frame 28 x 28, bumpers 34 x 34, mast
    const box = (x0, y0, z0, x1, y1, z1) => {
      const v = [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
      return [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].map(([a, b]) => [v[a], v[b]]);
    };
    const ring = (cx, cz, cy, r, axis, n = 18) => {
      const segs = []; let prev;
      for (let i = 0; i <= n; i++) {
        const a = i / n * Math.PI * 2;
        const p = axis === 'x' ? [cx, cy + Math.sin(a) * r, cz + Math.cos(a) * r] : [cx + Math.cos(a) * r, cy, cz + Math.sin(a) * r];
        if (prev) segs.push([prev, p]); prev = p;
      }
      return segs;
    };
    const solid = [
      ...box(-14, 0, -14, 14, 2, 14),          // frame rails
      ...box(-17, 1.5, -17, 17, 6.5, 17),      // bumpers
      ...box(-14, 0, -2, 14, 2, 2),            // cross member
    ];
    [[-10, -10], [10, -10], [10, 10], [-10, 10]].forEach(([x, z]) => {
      solid.push(...ring(x, z, 2.5, 2.2, 'x', 14));
      solid.push(...ring(x, z, 5.5, 3, 'y', 14));
    });
    const sketch = [ // dashed: mechanisms not designed yet
      ...box(-6, 2, 6, -4, 40, 8), ...box(4, 2, 6, 6, 40, 8), ...box(-6, 38, 6, 6, 40, 8),
      ...box(-11, 2, -16, 11, 10, -12),
    ];
    const proj = ([x, y, z]) => {
      const cy = Math.cos(st.yaw + st.spin), sy = Math.sin(st.yaw + st.spin);
      let X = x * cy - z * sy, Z = x * sy + z * cy, Y = y - 14;
      const cp = Math.cos(st.pitch), sp = Math.sin(st.pitch);
      const Y2 = Y * cp - Z * sp; Z = Y * sp + Z * cp;
      const f = 140 / (140 + Z); const s = Math.min(st.w, st.h) / 70;
      return [st.w / 2 + X * f * s, st.h / 2 - Y2 * f * s];
    };
    const line = (segs) => { ctx.beginPath(); segs.forEach(([a, b]) => { const p = proj(a), q = proj(b); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }); ctx.stroke(); };
    st.draw = () => {
      ctx.clearRect(0, 0, st.w, st.h);
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(139,61,255,.9)'; ctx.shadowBlur = 10;
      ctx.strokeStyle = 'rgba(214,190,255,.9)'; ctx.lineWidth = 1.3; ctx.setLineDash([]); line(solid);
      ctx.shadowBlur = 0; ctx.strokeStyle = 'rgba(201,166,255,.45)'; ctx.lineWidth = 1; ctx.setLineDash([4, 5]); line(sketch);
      ctx.setLineDash([]);
    };
    return st;
  })();

  /* ---------- Animation loop for canvases ---------- */
  if (reduce) {
    terrains.forEach(drawTerrain); robot.draw();
    addEventListener('resize', () => { terrains.forEach(drawTerrain); robot.draw(); });
  } else {
    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      terrains.forEach(st => { if (st.visible && !document.hidden) { st.t += dt * .9; drawTerrain(st); } });
      if (robot.visible && !document.hidden) { robot.yaw += dt * .35; robot.draw(); }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  if (reduce || !hasGsap) return;

  /* =========================================================
     GSAP choreography
     ========================================================= */
  gsap.registerPlugin(ScrollTrigger);
  const EASE = 'expo.out';

  // Split the hero name into letters
  const nameEl = document.querySelector('[data-split]');
  const word = nameEl.textContent.trim();
  nameEl.setAttribute('aria-label', word);
  nameEl.innerHTML = [...word].map(c => `<span class="ch" aria-hidden="true">${c}</span>`).join('');

  // --- SC 01: title sequence (signature intro, bible §11) ---
  const intro = gsap.timeline({ defaults: { ease: EASE } });
  intro
    .fromTo('.letterbox', { height: 0 }, { height: '6.5vh', duration: 1.2, ease: 'power3.inOut' }, 0)
    .from(['.hero__beam', '.hero__orb'], { opacity: 0, duration: 1.6, stagger: .15 }, 0)
    .from('.hero__numerals span', { opacity: 0, scale: 1.25, filter: 'blur(20px)', duration: 2.2 }, .1)
    .from('.hero__program', { opacity: 0, letterSpacing: '.9em', duration: 1.4 }, .2)
    .from('.hero__content .stars', { opacity: 0, scale: .4, duration: .8, ease: 'back.out(3)' }, .4)
    .from('[data-badge]', { opacity: 0, scale: .92, filter: 'blur(10px)', duration: 1.1 }, .3)
    .from('.hero__the', { opacity: 0, y: 10, duration: .8 }, .75)
    .from('.hero__name .ch', { opacity: 0, y: 14, scale: 1.4, filter: 'blur(12px)', duration: 1.1, stagger: .045 }, .8)
    .from('.hero__number', { opacity: 0, y: 12, duration: .9 }, 1.9)
    .from(['.hero__lede', '.hero__actions', '.hero__chips'], { opacity: 0, y: 18, duration: 1, stagger: .12 }, 2.1)
    .from('.terrain', { opacity: 0, duration: 2 }, .6);

  // Monocle glint: periodic + on badge hover
  const glint = () => gsap.fromTo('.badge__glint', { opacity: 0, scale: .4 }, { opacity: 1, scale: 1.3, duration: .25, yoyo: true, repeat: 1, ease: 'power2.out' });
  gsap.delayedCall(2.6, glint);
  setInterval(() => { if (scrollY < innerHeight) glint(); }, 7000);
  document.querySelector('[data-badge]').addEventListener('pointerenter', glint);

  // Pointer parallax on the stage
  if (fine) {
    const qx = gsap.quickTo('.hero__numerals', 'x', { duration: 1.2, ease: 'power3' });
    const qy = gsap.quickTo('.hero__numerals', 'y', { duration: 1.2, ease: 'power3' });
    const bx = gsap.quickTo('.hero__beam', 'rotate', { duration: 1.6, ease: 'power3' });
    document.querySelector('.hero').addEventListener('pointermove', e => {
      const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5;
      qx(nx * -40); qy(ny * -24); bx(nx * 8);
    });
  }

  // Scroll: the camera dollies through the numerals into the briefing
  const dolly = gsap.timeline({
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=70%', scrub: .8, pin: true, anticipatePin: 1 },
  });
  dolly
    .to('.hero__content', { y: -60, opacity: 0, filter: 'blur(8px)', scale: .96, ease: 'power1.in' }, 0)
    .to('.hero__numerals span', { scale: 4.2, opacity: 0, ease: 'power2.in' }, 0)
    .to('.letterbox', { height: '50vh', ease: 'power2.inOut' }, .35)
    .to('.terrain', { yPercent: 30, opacity: 0 }, 0)
    .to('.hero__scroll', { opacity: 0, duration: .1 }, 0);

  // --- SC 02: the script reads itself, word by word ---
  document.querySelectorAll('[data-script]').forEach(p => {
    const out = [];
    p.childNodes.forEach(n => {
      if (n.nodeType === 3) n.textContent.split(/(\s+)/).forEach(t => out.push(/^\s+$/.test(t) || !t ? document.createTextNode(t) : Object.assign(document.createElement('span'), { className: 'w', textContent: t })));
      else { n.classList.add('w'); out.push(n); }
    });
    p.replaceChildren(...out);
    gsap.to(p.querySelectorAll('.w'), {
      opacity: 1, stagger: .1, ease: 'none',
      scrollTrigger: { trigger: p, start: 'top 82%', end: 'bottom 45%', scrub: true },
    });
  });

  // --- SC 03: the filmstrip runs sideways (desktop) ---
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1021px)', () => {
    const viewport = document.querySelector('[data-reel]');
    const strip = document.querySelector('[data-strip]');
    viewport.classList.add('is-pinned');
    const dist = () => Math.max(0, strip.scrollWidth - innerWidth);
    const run = gsap.to(strip, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: viewport, start: 'center center', end: () => '+=' + dist(), scrub: .6, pin: true, invalidateOnRefresh: true, anticipatePin: 1 },
    });
    gsap.from('.frame__still', { scale: .86, opacity: .4, stagger: .1, ease: 'none', scrollTrigger: { trigger: viewport, start: 'top bottom', end: 'center center', scrub: true } });
    return () => { viewport.classList.remove('is-pinned'); run.scrollTrigger?.kill(); };
  });
  // route draws on when the Istanbul frame is in view
  gsap.fromTo('.route', { strokeDashoffset: 300, strokeDasharray: '300 300' }, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', scrollTrigger: { trigger: '#season', start: 'top 40%' } });

  // --- SC 04: divisions roll call ---
  gsap.from('.div', { opacity: 0, x: 40, stagger: .07, duration: 1, ease: EASE, scrollTrigger: { trigger: '.divisions', start: 'top 80%' } });
  gsap.from('.lens', { scale: .6, opacity: 0, rotate: -30, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.lens', start: 'top 85%' } });

  // --- SC 05: robot turns as you scroll past it ---
  ScrollTrigger.create({ trigger: '.robot', start: 'top bottom', end: 'bottom top', scrub: true, onUpdate: s => { robot.spin = s.progress * Math.PI * 1.2; } });
  gsap.from('.pipeline li', { opacity: 0, y: 10, stagger: .08, duration: .8, ease: EASE, scrollTrigger: { trigger: '.pipeline', start: 'top 85%' } });
  gsap.from('.robot__stamp', { scale: 2.4, opacity: 0, rotate: -20, duration: .5, ease: 'power4.in', scrollTrigger: { trigger: '.robot__view', start: 'top 60%' } });

  // --- SC 06: call sheet lines are written in ---
  gsap.utils.toArray('.callsheet li').forEach((li, i) => {
    gsap.from(li, { clipPath: 'inset(0 100% 0 0)', duration: .9, ease: 'power3.inOut', delay: i * .06, scrollTrigger: { trigger: li, start: 'top 88%' } });
  });

  // --- SC 07: tiers rise like a podium ---
  gsap.from('.tier', { y: (i) => 60 + i * 30, opacity: 0, duration: 1.3, stagger: .1, ease: EASE, scrollTrigger: { trigger: '.tiers', start: 'top 85%' } });
  gsap.from('.capband', { scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: 'power3.inOut', scrollTrigger: { trigger: '.enlist', start: 'top 90%' } });

  // --- END CREDITS: scroll-scrubbed roll ---
  const win = document.querySelector('.credits__window');
  const roll = document.querySelector('[data-roll]');
  gsap.to(roll, {
    y: () => -(roll.offsetHeight - win.offsetHeight * .05), ease: 'none',
    scrollTrigger: { trigger: win, start: 'top top', end: () => '+=' + roll.offsetHeight * .9, scrub: .5, pin: true, invalidateOnRefresh: true },
  });

  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
})();
