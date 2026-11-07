/* The Ducktators · FRC 11745 · site behaviour (v2)
   Lenis smooth scroll + GSAP/ScrollTrigger choreography + canvas aurora and robot. */

/* ---------- EDIT ME: team details (leave '' until confirmed) ---------- */
const SITE = {
  email: '',          // e.g. 'ducktators11745@gmail.com'
  instagram: '',      // handle without @, e.g. 'frc11745'
  kickoff: '',        // ISO date-time once FIRST announces it, e.g. '2027-01-09T21:30:00+05:30'
  formEndpoint: '',   // optional: Formspree / Google Apps Script URL that accepts POST JSON
};

(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger);
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const anim = hasGsap && !reduce;
  if (!anim) root.classList.add('no-anim');
  const brands = navigator.userAgentData?.brands || [];
  if (brands.some(b => /Chromium|Google Chrome|Edge/.test(b.brand)) && fine && !reduce) root.classList.add('liquid');
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const pad = n => String(n).padStart(2, '0');

  /* ---------- Config wiring ---------- */
  const mailto = (subject) => SITE.email ? `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}` : null;
  $$('[data-email-text]').forEach(el => { if (SITE.email) el.textContent = SITE.email; });
  $$('[data-mail]').forEach(a => {
    const href = mailto(a.dataset.mail === 'sponsor' ? 'Sponsorship deck request: The Ducktators FRC 11745' : 'Hello from the website: FRC 11745');
    if (href) a.href = href; else if (a.getAttribute('href') === 'mailto:') a.href = '#contact';
  });
  $$('[data-social="instagram"]').forEach(a => {
    if (SITE.instagram) { a.href = `https://instagram.com/${SITE.instagram}`; a.querySelector('b').textContent = '@' + SITE.instagram; a.rel = 'noopener'; }
  });

  /* ---------- Lenis ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: .085, wheelMultiplier: 1, smoothWheel: true, syncTouch: false });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  const scrollToEl = (target, offset = -20) => {
    if (lenis) lenis.scrollTo(target, { offset, duration: 1.8, easing: t => 1 - Math.pow(1 - t, 4) });
    else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault(); scrollToEl(t, id === '#top' ? 0 : -10); history.replaceState(null, '', id);
  }));

  /* ---------- Drawer ---------- */
  const menuBtn = $('[data-menu]'), drawer = $('#drawer');
  const setMenu = open => {
    menuBtn.setAttribute('aria-expanded', String(open)); drawer.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (lenis) open ? lenis.stop() : lenis.start();
    if (open && anim) gsap.from($$('a', drawer), { y: 40, opacity: 0, stagger: .05, duration: .7, ease: 'expo.out' });
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  drawer.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Nav: hide on scroll down, adapt to light sections, active link ---------- */
  const nav = $('[data-nav]');
  const bar = $('[data-progress]');
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    if (y > 500 && y > lastY + 3 && drawer.hidden) nav.classList.add('is-hidden');
    else if (y < lastY - 3 || y < 500) nav.classList.remove('is-hidden');
    lastY = y;
    const el = document.elementFromPoint(innerWidth / 2, 40);
    nav.classList.toggle('on-light', el?.closest('[data-theme]')?.dataset.theme === 'light');
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const links = $$('.nav__links a');
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));

  /* ---------- Glass specular ---------- */
  if (fine) document.addEventListener('pointermove', e => {
    const g = e.target.closest?.('.glass'); if (!g) return;
    const r = g.getBoundingClientRect();
    g.style.setProperty('--mx', `${e.clientX - r.left}px`); g.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });

  /* ---------- Countdown ---------- */
  const cd = Object.fromEntries($$('[data-cd]').map(el => [el.dataset.cd, el]));
  const kickoff = SITE.kickoff ? new Date(SITE.kickoff) : null;
  if (kickoff && !isNaN(kickoff)) {
    $('[data-countdown-note]').textContent = 'Kickoff 2027: ' + kickoff.toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'short' });
    const render = () => {
      let ms = Math.max(0, kickoff - Date.now());
      const d = Math.floor(ms / 864e5); ms -= d * 864e5;
      const h = Math.floor(ms / 36e5); ms -= h * 36e5;
      const m = Math.floor(ms / 6e4); const s = Math.floor((ms - m * 6e4) / 1000);
      cd.d.textContent = d; cd.h.textContent = pad(h); cd.m.textContent = pad(m); cd.s.textContent = pad(s);
      setTimeout(render, 1000);
    };
    render();
  }

  /* ---------- Enlistment form ---------- */
  const form = $('[data-enlist]'), status = $('[data-status]', form), submitBtn = $('[data-submit]', form);
  const showErr = (n, on) => $(`[data-err="${n}"]`, form).closest('.field').classList.toggle('has-error', on);
  const validate = () => {
    const name = form.name.value.trim(), grade = form.grade.value, email = form.email.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    showErr('name', !name); showErr('grade', !grade); showErr('email', !ok);
    return name && grade && ok;
  };
  ['input', 'change'].forEach(ev => form.addEventListener(ev, e => { if (e.target.closest('.has-error')) validate(); }));
  form.addEventListener('submit', async e => {
    e.preventDefault(); status.className = 'pass__status';
    if (!validate()) {
      status.textContent = 'A few fields need attention before you can report for duty.'; status.classList.add('is-err');
      $('.has-error input, .has-error select', form)?.focus();
      if (anim) gsap.fromTo(form, { x: -8 }, { x: 0, duration: .6, ease: 'elastic.out(1,.3)' });
      return;
    }
    const data = { name: form.name.value.trim(), grade: form.grade.value, email: form.email.value.trim(),
      divisions: $$('input[name="div"]:checked', form).map(i => i.value), note: form.note.value.trim() };
    if (SITE.formEndpoint) {
      submitBtn.disabled = true; submitBtn.textContent = 'Sending orders…';
      try {
        const res = await fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error(res.status);
        form.reset(); status.textContent = `Orders received, ${data.name.split(' ')[0]}. A mentor will reply to ${data.email}.`; status.classList.add('is-ok');
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

  /* ---------- Canvas helper ---------- */
  const fit = (cv, ctx, scale = 1) => {
    const dpr = Math.min(2, devicePixelRatio || 1) * scale;
    const w = cv.clientWidth, h = cv.clientHeight;
    cv.width = Math.max(1, w * dpr); cv.height = Math.max(1, h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  };
  const watch = (el, st) => new IntersectionObserver(([en]) => { st.visible = en.isIntersecting; }).observe(el);

  /* ---------- Aurora (hero background) ---------- */
  const aur = (() => {
    const cv = $('[data-aurora]'), ctx = cv.getContext('2d');
    const st = { visible: true, t: 0, mx: .5, my: .5 };
    const size = () => Object.assign(st, fit(cv, ctx, .5)); size(); addEventListener('resize', size); watch(cv, st);
    const blobs = [
      { c: [139, 61, 255], r: .55, x: .3, y: .35, sx: .13, sy: .1, p: 0 },
      { c: [91, 71, 255], r: .5, x: .72, y: .3, sx: .1, sy: .14, p: 2 },
      { c: [233, 185, 73], r: .32, x: .62, y: .78, sx: .16, sy: .08, p: 4 },
      { c: [94, 42, 132], r: .6, x: .2, y: .85, sx: .08, sy: .1, p: 1 },
      { c: [201, 166, 255], r: .22, x: .5, y: .5, sx: .2, sy: .16, p: 3 },
    ];
    st.draw = () => {
      const { w, h, t } = st; const m = Math.max(w, h);
      ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      blobs.forEach((b, i) => {
        const x = (b.x + Math.sin(t * .23 + b.p) * b.sx + (st.mx - .5) * .06 * (i % 2 ? 1 : -1)) * w;
        const y = (b.y + Math.cos(t * .19 + b.p) * b.sy + (st.my - .5) * .06) * h;
        const r = b.r * m;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${b.c},.42)`); g.addColorStop(.5, `rgba(${b.c},.12)`); g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      });
    };
    $('.hero').addEventListener('pointermove', e => { st.mx = e.clientX / innerWidth; st.my = e.clientY / innerHeight; });
    return st;
  })();

  /* ---------- Robot: wireframe that assembles with progress 0..1 ---------- */
  const robot = (() => {
    const cv = $('[data-robot]'), ctx = cv.getContext('2d');
    const st = { visible: true, yaw: .7, pitch: .5, p: reduce ? 1 : 0, spin: 0 };
    const size = () => Object.assign(st, fit(cv, ctx)); size(); addEventListener('resize', size); watch(cv, st);
    const box = (x0, y0, z0, x1, y1, z1) => {
      const v = [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
      return [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].map(([a, b]) => [v[a], v[b]]);
    };
    const ring = (cx, cz, cy, r, axis, n = 16) => { const s = []; let pv;
      for (let i = 0; i <= n; i++) { const a = i / n * Math.PI * 2;
        const p = axis === 'x' ? [cx, cy + Math.sin(a) * r, cz + Math.cos(a) * r] : [cx + Math.cos(a) * r, cy, cz + Math.sin(a) * r];
        if (pv) s.push([pv, p]); pv = p; } return s; };
    const mods = []; [[-10,-10],[10,-10],[10,10],[-10,10]].forEach(([x, z]) => mods.push(...ring(x, z, 2.5, 2.2, 'x', 14), ...ring(x, z, 5.5, 3, 'y', 14)));
    // [segments, appears at progress, drop height]
    const parts = [
      [[...box(-14, 0, -14, 14, 2, 14), ...box(-14, 0, -2, 14, 2, 2)], 0, 0],
      [box(-17, 1.5, -17, 17, 6.5, 17), .2, 24],
      [mods, .4, 30],
      [[...box(-6, 2, 6, -4, 40, 8), ...box(4, 2, 6, 6, 40, 8), ...box(-6, 38, 6, 6, 40, 8)], .6, 40],
      [box(-11, 2, -16, 11, 10, -12), .75, 30],
      [box(-9, 2, -6, 9, 7, 4), .88, 20],
    ];
    const proj = ([x, y, z], lift) => {
      const a = st.yaw + st.spin, cy = Math.cos(a), sy = Math.sin(a);
      let X = x * cy - z * sy, Z = x * sy + z * cy, Y = y + lift - 14;
      const cp = Math.cos(st.pitch), sp = Math.sin(st.pitch);
      const Y2 = Y * cp - Z * sp; Z = Y * sp + Z * cp;
      const f = 150 / (150 + Z), s = Math.min(st.w, st.h) / 72;
      return [st.w / 2 + X * f * s, st.h * .46 - Y2 * f * s];
    };
    st.draw = () => {
      const { w, h, p } = st; ctx.clearRect(0, 0, w, h); ctx.lineCap = 'round';
      const done = p > .97;
      parts.forEach(([segs, at, drop]) => {
        const k = Math.min(1, Math.max(0, (p - at) / .12));
        if (k <= 0 && at > 0) { // ghost outline of what is coming
          ctx.strokeStyle = 'rgba(201,166,255,.12)'; ctx.lineWidth = 1; ctx.setLineDash([3, 5]);
        } else {
          ctx.strokeStyle = done ? `rgba(233,185,73,.95)` : `rgba(214,190,255,${.35 + .6 * k})`;
          ctx.lineWidth = 1.4; ctx.setLineDash([]);
          ctx.shadowColor = done ? 'rgba(233,185,73,.8)' : 'rgba(139,61,255,.9)'; ctx.shadowBlur = 10 * k;
        }
        const lift = at > 0 ? (1 - (k <= 0 ? 1 : k)) * drop * (k <= 0 ? 0 : 1) : 0;
        ctx.beginPath();
        segs.forEach(([a, b]) => { const P = proj(a, lift), Q = proj(b, lift); ctx.moveTo(P[0], P[1]); ctx.lineTo(Q[0], Q[1]); });
        ctx.stroke(); ctx.shadowBlur = 0;
      });
      ctx.setLineDash([]);
    };
    return st;
  })();

  /* ---------- Render loop ---------- */
  if (reduce) { aur.draw(); robot.draw(); addEventListener('resize', () => { aur.draw(); robot.draw(); }); }
  else {
    let last = performance.now();
    const loop = now => {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (!document.hidden) {
        if (aur.visible) { aur.t += dt; aur.draw(); }
        if (robot.visible) { robot.yaw += dt * .3; robot.draw(); }
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  if (!anim) { $('[data-loader]')?.classList.add('is-done'); root.classList.add('no-hscroll'); return; }

  /* =========================================================
     GSAP
     ========================================================= */
  gsap.registerPlugin(ScrollTrigger);
  const EASE = 'expo.out';

  /* ---------- Custom cursor + magnetic buttons ---------- */
  if (fine) {
    root.classList.add('has-cursor');
    const cur = $('.cursor');
    const dx = gsap.quickTo('.cursor__dot', 'x', { duration: .08 }), dy = gsap.quickTo('.cursor__dot', 'y', { duration: .08 });
    const rx = gsap.quickTo('.cursor__ring', 'x', { duration: .45, ease: 'power3' }), ry = gsap.quickTo('.cursor__ring', 'y', { duration: .45, ease: 'power3' });
    addEventListener('pointermove', e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
    document.addEventListener('pointerover', e => cur.classList.toggle('is-hover', !!e.target.closest('a, button, summary, label, [data-magnetic]')));
    $$('[data-magnetic]').forEach(el => {
      const mx = gsap.quickTo(el, 'x', { duration: .6, ease: 'elastic.out(1,.4)' }), my = gsap.quickTo(el, 'y', { duration: .6, ease: 'elastic.out(1,.4)' });
      el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * .3); my((e.clientY - r.top - r.height / 2) * .4); });
      el.addEventListener('pointerleave', () => { mx(0); my(0); });
    });
  }

  /* ---------- Text scramble ---------- */
  const scramble = (el, dur = 1.2) => {
    const final = el.dataset.final || el.textContent; el.dataset.final = final;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·';
    const o = { p: 0 };
    return gsap.to(o, { p: 1, duration: dur, ease: 'none', onUpdate: () => {
      el.textContent = [...final].map((c, i) => c === ' ' ? ' ' : i / final.length < o.p ? c : chars[Math.random() * chars.length | 0]).join('');
    }, onComplete: () => { el.textContent = final; } });
  };

  /* ---------- Hero intro (after loader) ---------- */
  const heroIntro = () => {
    const tl = gsap.timeline({ defaults: { ease: EASE } });
    tl.from('.aurora', { opacity: 0, duration: 2 }, 0)
      .add(scramble($('[data-scramble]'), 1.1), .1)
      .from('.hero__title .line > span', { yPercent: 115, rotate: 4, duration: 1.4, stagger: .1 }, .15)
      .from('.hero__badge', { scale: .4, opacity: 0, rotateY: -70, rotateX: 20, filter: 'blur(14px)', duration: 1.8 }, .35)
      .from(['.hero__lede', '.hero__actions'], { y: 30, opacity: 0, duration: 1.2, stagger: .1 }, .8)
      .from('.hero__meta p', { y: 20, opacity: 0, duration: 1, stagger: .1 }, 1)
      .from('.ticker', { yPercent: 120, rotate: 0, duration: 1.4 }, .9);
    return tl;
  };

  /* ---------- Loader: count to 11745, then lift ---------- */
  const loader = $('[data-loader]');
  let seen = false; try { seen = sessionStorage.getItem('dk-intro') === '1'; sessionStorage.setItem('dk-intro', '1'); } catch {}
  if (seen) { loader.classList.add('is-done'); heroIntro(); }
  else {
    if (lenis) lenis.stop();
    const num = $('[data-loader-num]'); const o = { v: 0 };
    gsap.timeline()
      .to(o, { v: 11745, duration: 1.6, ease: 'power3.inOut', onUpdate: () => { num.textContent = String(Math.round(o.v)).padStart(5, '0'); } })
      .to('[data-loader-bar]', { scaleX: 1, duration: 1.6, ease: 'power3.inOut' }, 0)
      .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, '+=.15')
      .add(() => { loader.classList.add('is-done'); if (lenis) lenis.start(); })
      .add(heroIntro(), '-=.7');
  }

  /* ---------- Hero: badge tilt + scroll-away ---------- */
  const badge = $('[data-tilt]');
  if (fine) {
    const tx = gsap.quickTo(badge, 'rotateY', { duration: .9, ease: 'power3' }), ty = gsap.quickTo(badge, 'rotateX', { duration: .9, ease: 'power3' });
    $('.hero').addEventListener('pointermove', e => {
      const nx = e.clientX / innerWidth - .5, ny = e.clientY / innerHeight - .5;
      tx(nx * 30); ty(-ny * 24);
      badge.style.setProperty('--gx', `${50 - nx * 80}%`); badge.style.setProperty('--gy', `${40 - ny * 80}%`);
    });
  }
  gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    .to('.hero__title', { yPercent: -40, opacity: 0, ease: 'none' }, 0)
    .to('.hero__badge', { y: 160, scale: 1.25, ease: 'none' }, 0)
    .to(['.hero__lede', '.hero__actions', '.logotype'], { y: -80, opacity: 0, ease: 'none' }, 0)
    .to('.aurora', { opacity: .3, ease: 'none' }, 0);

  /* ---------- Ticker: endless, speeds up with scroll velocity ---------- */
  const tickerTrack = $('[data-ticker]');
  tickerTrack.innerHTML += tickerTrack.innerHTML;
  const tick = gsap.to(tickerTrack, { xPercent: -50, duration: 26, ease: 'none', repeat: -1 });
  const logos = $('[data-logos]'); logos.innerHTML += logos.innerHTML;
  const logoTick = gsap.to(logos, { xPercent: -50, duration: 30, ease: 'none', repeat: -1 });
  if (lenis) lenis.on('scroll', ({ velocity }) => {
    const v = 1 + Math.min(4, Math.abs(velocity) / 8);
    gsap.to([tick, logoTick], { timeScale: velocity < 0 ? -v : v, duration: .3, overwrite: true });
  });

  /* ---------- Generic heading reveal ---------- */
  $$('.h2, .kickoff__title').forEach(h => gsap.from(h, { y: 60, opacity: 0, filter: 'blur(12px)', duration: 1.4, ease: EASE, scrollTrigger: { trigger: h, start: 'top 88%' } }));
  $$('.sub').forEach(s => gsap.from(s, { y: 30, opacity: 0, duration: 1.2, ease: EASE, scrollTrigger: { trigger: s, start: 'top 90%' } }));

  /* ---------- Story: words fill in as you read ---------- */
  const story = $('[data-fill]');
  const out = [];
  story.childNodes.forEach(n => {
    if (n.nodeType === 3) n.textContent.split(/(\s+)/).forEach(t => out.push(!t.trim() ? document.createTextNode(t) : Object.assign(document.createElement('span'), { className: 'w', textContent: t })));
    else { n.classList.add('w'); out.push(n); }
  });
  story.replaceChildren(...out);
  $$('.w', story).forEach((w, i, all) => {
    gsap.to(w, { color: w.tagName === 'B' ? '#8B3DFF' : '#0B0712', ease: 'none',
      scrollTrigger: { trigger: story, start: () => `top+=${(i / all.length) * story.offsetHeight * .9} 75%`, end: () => `top+=${(i / all.length) * story.offsetHeight * .9 + 40} 75%`, scrub: true } });
  });

  /* ---------- Bento ---------- */
  gsap.from('.tile', { y: 80, opacity: 0, scale: .96, duration: 1.3, stagger: .08, ease: EASE, scrollTrigger: { trigger: '.bento', start: 'top 85%' } });
  $$('[data-count]').forEach(el => {
    const n = +el.dataset.count, o = { v: 0 };
    gsap.to(o, { v: n, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' }, onUpdate: () => { el.textContent = Math.round(o.v); } });
  });
  gsap.to('.weeks i', { className: 'on', stagger: .14, duration: .01, scrollTrigger: { trigger: '.weeks', start: 'top 90%' } });
  gsap.from('[data-scale]', { scaleX: 0, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: '.scale', start: 'top 92%' } });
  gsap.from('.alliance span', { scale: 0, rotate: -30, duration: .8, stagger: .07, ease: 'back.out(2)', scrollTrigger: { trigger: '.alliance', start: 'top 90%' } });
  const clockEl = $('[data-clock]'), mc = { s: 150 };
  gsap.to(mc, { s: 0, duration: 9, ease: 'none', repeat: -1, repeatDelay: 1.2, onUpdate: () => { const s = Math.ceil(mc.s); clockEl.textContent = `${Math.floor(s / 60)}:${pad(s % 60)}`; },
    scrollTrigger: { trigger: clockEl, start: 'top bottom', end: 'bottom top', toggleActions: 'play pause resume pause' } });

  /* ---------- Season: horizontal track ---------- */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const track = $('[data-track]');
    const dist = () => Math.max(0, track.scrollWidth - innerWidth);
    const tw = gsap.to(track, { x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: '[data-season]', start: 'top top', end: () => '+=' + dist(), scrub: .7, pin: true, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: s => gsap.set('[data-season-bar]', { scaleX: s.progress }) } });
    $$('.card', track).forEach(c => gsap.from($('.card__art', c), { scale: .82, ease: 'none', scrollTrigger: { trigger: c, containerAnimation: tw, start: 'left right', end: 'left 40%', scrub: true } }));
    return () => {};
  });
  mm.add('(max-width: 899px)', () => { root.classList.add('no-hscroll'); return () => root.classList.remove('no-hscroll'); });
  gsap.fromTo('.route', { strokeDashoffset: 300, strokeDasharray: '300 300' }, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', scrollTrigger: { trigger: '#season', start: 'top 30%' } });

  /* ---------- Kickoff clock: sealed digits flicker ---------- */
  if (!kickoff) {
    ScrollTrigger.create({ trigger: '.clock', start: 'top 85%', onEnter: () => {
      Object.values(cd).forEach((el, i) => {
        const o = { p: 0 };
        gsap.to(o, { p: 1, duration: 1.4, delay: i * .12, ease: 'none', onUpdate: () => { el.textContent = o.p < .9 ? pad(Math.random() * 99 | 0) : '--'; }, onComplete: () => { el.textContent = '--'; } });
      });
    } });
  }
  gsap.from('.clock > div', { y: 50, opacity: 0, rotateX: -60, transformOrigin: '50% 100%', duration: 1.2, stagger: .08, ease: EASE, scrollTrigger: { trigger: '.clock', start: 'top 88%' } });

  /* ---------- Divisions: stacking cards ---------- */
  const cards = $$('.dcard');
  cards.forEach((c, i) => {
    c.style.setProperty('--i', i);
    if (i === cards.length - 1) return;
    gsap.to(c, { scale: .9 + i * .005, filter: 'brightness(.55)', ease: 'none',
      scrollTrigger: { trigger: cards[i + 1], start: 'top 75%', end: () => `top ${96 + (i + 1) * 14}px`, scrub: true } });
  });
  cards.forEach(c => gsap.from($$('.dcard__copy > *', c), { y: 40, opacity: 0, duration: 1, stagger: .06, ease: EASE, scrollTrigger: { trigger: c, start: 'top 70%' } }));
  cards.forEach(c => gsap.from($('.dcard__icon', c), { rotate: -25, scale: .6, opacity: 0, duration: 1.6, ease: EASE, scrollTrigger: { trigger: c, start: 'top 70%' } }));

  /* ---------- Robot: pinned assembly ---------- */
  const stages = $$('[data-stages] li');
  const setStage = p => {
    robot.p = p; robot.spin = p * Math.PI * 1.5;
    const idx = Math.min(stages.length - 1, Math.floor(p * stages.length));
    stages.forEach((li, i) => li.classList.toggle('is-on', i <= idx));
  };
  setStage(0);
  mm.add('(min-width: 1021px)', () => {
    ScrollTrigger.create({ trigger: '[data-robot-pin]', start: 'top top', end: '+=180%', pin: true, scrub: true, anticipatePin: 1, onUpdate: s => setStage(s.progress) });
  });
  mm.add('(max-width: 1020px)', () => {
    ScrollTrigger.create({ trigger: '.robot__view', start: 'top 85%', end: 'bottom 20%', scrub: true, onUpdate: s => setStage(s.progress) });
  });

  /* ---------- Impact plans ---------- */
  gsap.utils.toArray('.plans li').forEach(li => gsap.from(li, { clipPath: 'inset(0 100% 0 0)', x: -30, duration: 1.1, ease: 'power3.inOut', scrollTrigger: { trigger: li, start: 'top 90%' } }));

  /* ---------- Sponsors: tiers rise + tilt ---------- */
  gsap.from('.tier', { y: (i) => 80 + i * 40, opacity: 0, rotateX: 25, duration: 1.4, stagger: .1, ease: EASE, scrollTrigger: { trigger: '.tiers', start: 'top 85%' } });
  if (fine) $$('[data-tilt-soft]').forEach(t => {
    const rx = gsap.quickTo(t, 'rotateX', { duration: .6, ease: 'power3' }), ry = gsap.quickTo(t, 'rotateY', { duration: .6, ease: 'power3' });
    t.addEventListener('pointermove', e => { const r = t.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - .5) * 14); rx(-((e.clientY - r.top) / r.height - .5) * 14); });
    t.addEventListener('pointerleave', () => { rx(0); ry(0); });
  });

  /* ---------- Enlist + footer ---------- */
  $$('.capband').forEach(c => gsap.from(c, { scaleX: 0, transformOrigin: 'left center', duration: 1.4, ease: 'power3.inOut', scrollTrigger: { trigger: c, start: 'top 95%' } }));
  gsap.from('.pass', { y: 80, opacity: 0, rotate: 3, duration: 1.4, ease: EASE, scrollTrigger: { trigger: '.pass', start: 'top 88%' } });
  const giant = $('[data-giant]');
  giant.innerHTML = [...giant.textContent].map(c => `<span style="display:inline-block">${c}</span>`).join('');
  gsap.from($$('span', giant), { yPercent: 100, opacity: 0, stagger: .04, ease: 'power2.out', scrollTrigger: { trigger: '.footer', start: 'top 85%', end: 'bottom bottom', scrub: true } });

  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
})();
