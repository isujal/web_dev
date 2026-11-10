/* The Ducktators · FRC 11745 · site behaviour (v2)
   Lenis smooth scroll + GSAP/ScrollTrigger choreography + canvas aurora and robot. */

/* ---------- EDIT ME: team details (leave '' until confirmed) ---------- */
const SITE = {
  email: 'ducktator.frc@gmail.com', // team inbox: contact links, sponsor enquiries, and the join-form fallback
  instagram: '',      // handle without @, e.g. 'frc11745'
  kickoff: '2027-01-09T00:00:00+05:30', // Kickoff day (IST). Put the exact broadcast time here once FIRST confirms it, e.g. '2027-01-09T22:30:00+05:30'
  formEndpoint: '',   // Google Apps Script web-app URL (…/exec) that saves join applications to the team Google Sheet. See tools/apps-script/README.md
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
  // Lines that would otherwise show a placeholder stay hidden until their detail is filled in above
  $$('[data-needs]').forEach(el => { if (SITE[el.dataset.needs]) el.hidden = false; });

  /* ---------- Lenis ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: .085, wheelMultiplier: 1, smoothWheel: true, syncTouch: false }); window.__lenis = lenis;
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }
  let jumping = false;
  const scrollToEl = (target, offset = -20) => {
    // force: true so the scroll still runs if Lenis was paused (e.g. the phone menu was open)
    // keep the menu bar on screen during and after a menu jump (it normally hides while scrolling down)
    if (lenis) { jumping = true; lenis.scrollTo(target, { offset, duration: 1.8, easing: t => 1 - Math.pow(1 - t, 4), force: true,
      onComplete: () => { jumping = false; lastY = scrollY; nav.classList.remove('is-hidden'); } }); }
    else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    const go = () => { scrollToEl(t, id === '#top' ? 0 : -10); history.replaceState(null, '', id); };
    // From the phone menu: close it first (this unlocks scrolling), then scroll on the next frame
    if (!drawer.hidden) { setMenu(false); requestAnimationFrame(() => requestAnimationFrame(go)); }
    else go();
  }));

  /* ---------- Drawer (phone menu) ---------- */
  const menuBtn = $('[data-menu]'), drawer = $('#drawer');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (lenis) open ? lenis.stop() : lenis.start();
    const CIRCLE = 'calc(100% - 40px) 40px';
    if (!anim) { drawer.hidden = !open; return; }
    gsap.killTweensOf(drawer);
    if (open) {
      drawer.hidden = false;
      gsap.fromTo(drawer, { clipPath: `circle(0% at ${CIRCLE})` }, { clipPath: `circle(150% at ${CIRCLE})`, duration: .38, ease: 'expo.out' });
      gsap.fromTo($$('.drawer__links a', drawer), { x: 40, opacity: 0 }, { x: 0, opacity: 1, stagger: .03, duration: .4, ease: 'expo.out', delay: .06, overwrite: true });
      gsap.fromTo($$('.drawer__foot > *', drawer), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: .04, duration: .4, ease: 'expo.out', delay: .12, overwrite: true });
    } else if (!drawer.hidden) {
      gsap.to(drawer, { clipPath: `circle(0% at ${CIRCLE})`, duration: .2, ease: 'power2.out', onComplete: () => { drawer.hidden = true; gsap.set(drawer, { clearProps: 'clipPath' }); } });
    }
  }
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  drawer.addEventListener('click', e => { const a = e.target.closest('a'); if (a && !a.getAttribute('href').startsWith('#')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Nav: hide on scroll down, adapt to light sections, active link ---------- */
  const nav = $('[data-nav]');
  const bar = $('[data-progress]');
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    if (y > 500 && y > lastY + 3 && drawer.hidden && !jumping) nav.classList.add('is-hidden');
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
    $('[data-countdown]').hidden = false;
    $('[data-kickoff-label]').textContent = 'Kickoff · ' + kickoff.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
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
  // Link every inline error to its field (aria-describedby) and flag invalid fields (aria-invalid) for screen readers
  const linkErrors = f => $$('[data-err]', f).forEach(err => {
    err.id = `${f.hasAttribute('data-enlist') ? 'join' : 'sponsor'}-err-${err.dataset.err}`;
    const ctl = err.closest('.field').querySelector('input, select, textarea');
    if (ctl) ctl.setAttribute('aria-describedby', err.id);
  });
  const flag = (f, n, on) => {
    const field = $(`[data-err="${n}"]`, f).closest('.field');
    field.classList.toggle('has-error', on);
    field.querySelector('input, select, textarea')?.setAttribute('aria-invalid', String(on));
  };
  linkErrors(form);
  const showErr = (n, on) => flag(form, n, on);
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
      status.textContent = 'A few fields need attention before you can submit.'; status.classList.add('is-err');
      $('.has-error input, .has-error select', form)?.focus();
      if (anim) gsap.fromTo(form, { x: -8 }, { x: 0, duration: .6, ease: 'elastic.out(1,.3)' });
      return;
    }
    const data = { name: form.name.value.trim(), grade: form.grade.value, email: form.email.value.trim(),
      domains: $$('input[name="div"]:checked', form).map(i => i.value), note: form.note.value.trim() };
    if (SITE.formEndpoint) {
      submitBtn.disabled = true; submitBtn.textContent = 'Sending…';
      try {
        // text/plain keeps this a "simple" request, which Google Apps Script accepts without a CORS preflight
        const res = await fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ type: 'join', page: location.href, ...data, domains: data.domains.join(', ') }) });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || out.ok === false) throw new Error(out.error || res.status);
        form.reset(); status.textContent = `Application received, ${data.name.split(' ')[0]}. A mentor will reply to ${data.email}.`; status.classList.add('is-ok');
      } catch {
        status.textContent = `That did not go through. Try again, or email us at ${SITE.email}.`; status.classList.add('is-err');
      } finally { submitBtn.disabled = false; submitBtn.textContent = 'Submit application'; }
      return;
    }
    if (SITE.email) {
      // No Google Sheet yet: email the application straight to the team inbox through FormSubmit
      // (free relay; the very first submission sends a one-time "Activate form" email to the team inbox).
      if (form._honey?.value) { form.reset(); status.textContent = 'Application received.'; status.classList.add('is-ok'); return; } // bot trap
      submitBtn.disabled = true; submitBtn.textContent = 'Sending…';
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `New application: ${data.name} (${data.grade})`, _template: 'table', _replyto: data.email, _captcha: 'false',
            Name: data.name, Grade: data.grade, Email: data.email,
            Domains: data.domains.join(', ') || 'Not sure yet', Note: data.note || '(none)',
          }),
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || out.success === false || out.success === 'false') throw new Error(out.message || res.status);
        form.reset(); status.textContent = `Application received, ${data.name.split(' ')[0]}. A mentor will reply to ${data.email}.`; status.classList.add('is-ok');
      } catch {
        status.textContent = `That did not go through. Try again in a minute, or email us at ${SITE.email}.`; status.classList.add('is-err');
      } finally { submitBtn.disabled = false; submitBtn.textContent = 'Submit application'; }
      return;
    }
    status.textContent = 'Online enlistment opens soon. Until then, find a mentor in the CAJCS Maker Lab.';
  });

  /* ---------- Sponsor enquiry form: emails the team inbox through FormSubmit ---------- */
  const sForm = $('[data-sponsor]');
  if (sForm) {
    const sStatus = $('[data-sponsor-status]', sForm), sBtn = $('[data-sponsor-submit]', sForm);
    linkErrors(sForm);
    const sErr = (n, on) => flag(sForm, n, on);
    const sValidate = () => {
      const company = sForm.company.value.trim(), contact = sForm.contact.value.trim(), email = sForm.email.value.trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      sErr('company', !company); sErr('contact', !contact); sErr('email', !ok);
      return company && contact && ok;
    };
    ['input', 'change'].forEach(ev => sForm.addEventListener(ev, e => { if (e.target.closest('.has-error')) sValidate(); }));
    sForm.addEventListener('submit', async e => {
      e.preventDefault(); sStatus.className = 'pass__status';
      if (!sValidate()) {
        sStatus.textContent = 'Please fill in the highlighted fields.'; sStatus.classList.add('is-err');
        $('.has-error input', sForm)?.focus();
        if (anim) gsap.fromTo(sForm, { x: -8 }, { x: 0, duration: .6, ease: 'elastic.out(1,.3)' });
        return;
      }
      if (sForm._honey?.value) { sForm.reset(); sStatus.textContent = 'Thank you, we will be in touch.'; sStatus.classList.add('is-ok'); return; } // bot trap
      const d = {
        company: sForm.company.value.trim(), contact: sForm.contact.value.trim(), email: sForm.email.value.trim(),
        phone: sForm.phone.value.trim(), support: $$('input[name="support"]:checked', sForm).map(i => i.value), message: sForm.message.value.trim(),
      };
      sBtn.disabled = true; sBtn.textContent = 'Sending…';
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `Sponsor enquiry: ${d.company}`, _template: 'table', _replyto: d.email, _captcha: 'false',
            Company: d.company, Contact: d.contact, Email: d.email, Phone: d.phone || '(not given)',
            Support: d.support.join(', ') || 'Not specified', Message: d.message || '(none)',
          }),
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || out.success === false || out.success === 'false') throw new Error(out.message || res.status);
        sForm.reset(); sStatus.textContent = `Thank you, ${d.contact.split(' ')[0]}. A mentor will reply to ${d.email} within a few days.`; sStatus.classList.add('is-ok');
      } catch {
        sStatus.textContent = `That did not go through. Try again in a minute, or email us at ${SITE.email}.`; sStatus.classList.add('is-err');
      } finally { sBtn.disabled = false; sBtn.textContent = 'Send enquiry'; }
    });
  }

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

  /* ---------- Hero motion pause (WCAG 2.2.2: anything moving past 5 s can be stopped) ---------- */
  const motion = { paused: false };
  const heroPause = $('[data-hero-pause]');
  if (heroPause && !reduce) {
    heroPause.hidden = false;
    heroPause.addEventListener('click', () => {
      motion.paused = !motion.paused;
      heroPause.setAttribute('aria-pressed', String(motion.paused));
      $('[data-hero-pause-label]').textContent = motion.paused ? 'Play motion' : 'Pause motion';
      $('.hero').classList.toggle('is-still', motion.paused);
    });
  }

  /* ---------- Photo viewer for the arena gallery (js/lightbox.js) ---------- */
  const shots = $$('.ph img');
  const shotItems = () => shots.map(img => ({ src: img.currentSrc || img.src, thumb: img.currentSrc || img.src, alt: img.alt }));
  shots.forEach((img, k) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ph__zoom'; b.setAttribute('aria-label', 'Open photo: ' + img.alt);
    img.replaceWith(b); b.append(img);
    b.addEventListener('click', () => window.Lightbox?.open(shotItems(), k, b));
    const warm = () => window.Lightbox?.prefetch(img.currentSrc || img.src);
    b.addEventListener('pointerenter', warm); b.addEventListener('touchstart', warm, { passive: true }); b.addEventListener('focus', warm);
  });

  /* ---------- Vanta NET behind "Get in touch": desktop only, no reduced motion.
     three.js (~600 KB) loads only when the section comes near, and the net stops while it is off screen. ---------- */
  const net = $('[data-net]');
  if (net && !reduce && matchMedia('(min-width: 900px)').matches) {
    const load = src => new Promise((ok, fail) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = fail; document.head.append(s); });
    const tog = $('[data-net-toggle]'), label = $('[data-net-label]');
    let fx = null, seen = false, userPaused = false, running = false;
    const run = on => {
      if (!fx || on === running) return;
      running = on;
      if (on) { fx.prevNow = 0; fx.animationLoop(); } else cancelAnimationFrame(fx.req);
    };
    new IntersectionObserver(async ([en]) => {
      seen = en.isIntersecting;
      if (seen && !fx) {
        try {
          if (!window.THREE) await load('vendor/three.r134.min.js');
          if (!window.VANTA?.NET) await load('vendor/vanta.net.min.js');
          fx = window.VANTA.NET({
            el: net, THREE: window.THREE, mouseControls: true, touchControls: false, gyroControls: false,
            scale: 1, scaleMobile: 1, color: 0x8b3dff, backgroundColor: 0x000000, backgroundAlpha: 0,
            points: 9, maxDistance: 22, spacing: 18, showDots: true,
          });
          running = true; net.classList.add('is-on');
          if (tog) tog.hidden = false;
        } catch { return; /* the plain black section stays */ }
      }
      run(seen && !userPaused);
    }, { rootMargin: '300px 0px' }).observe(net.parentElement);
    tog?.addEventListener('click', () => {
      userPaused = !userPaused;
      tog.setAttribute('aria-pressed', String(userPaused));
      label.textContent = userPaused ? 'Play background' : 'Pause background';
      run(seen && !userPaused);
    });
  }

  /* ---------- Render loop ---------- */
  if (reduce) { aur.draw(); robot.draw(); addEventListener('resize', () => { aur.draw(); robot.draw(); }); }
  else {
    let last = performance.now();
    const loop = now => {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (!document.hidden) {
        if (aur.visible && !motion.paused) { aur.t += dt; aur.draw(); }
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

  /* ---------- Magnetic buttons (cursor itself is drawn by the system via CSS) ---------- */
  if (fine) {
    $$('[data-magnetic]').forEach(el => {
      const mx = gsap.quickTo(el, 'x', { duration: .5, ease: 'power3.out' }), my = gsap.quickTo(el, 'y', { duration: .5, ease: 'power3.out' });
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

  heroIntro();

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
  if (lenis) lenis.on('scroll', ({ velocity }) => {
    const v = 1 + Math.min(4, Math.abs(velocity) / 8);
    gsap.to(tick, { timeScale: velocity < 0 ? -v : v, duration: .3, overwrite: true });
  });

  /* ---------- Team poster: photo opens up, then the title stack assembles ----------
     The photo is only ever scaled DOWN from its full-resolution size, so it stays sharp. */
  const pName = $('[data-poster-name]');
  const pText = pName.textContent; // keep the word readable to screen readers; the letters are decoration
  pName.innerHTML = `<span class="sr-only">${pText}</span>` + [...pText].map(c => `<span class="ch" aria-hidden="true">${c}</span>`).join('');
  const posterTitle = tl => tl
    .from('.poster__badge', { scale: .4, opacity: 0, rotate: -40, duration: .5, ease: 'back.out(2)' }, '>-0.05')
    .from('.poster__the', { opacity: 0, letterSpacing: '1.6em', duration: .45 }, '<0.1')
    .from('.poster__name .ch', { opacity: 0, y: 14, scale: 1.4, filter: 'blur(10px)', stagger: .04, duration: .6 }, '<0.05')
    .from('[data-poster-rule]', { scaleX: 0, duration: .5 }, '<0.25')
    .from(['.poster__frc', '.poster__school'], { opacity: 0, y: 14, stagger: .08, duration: .5 }, '<0.15');
  const mm0 = gsap.matchMedia();
  mm0.add('(min-width: 700px)', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, scrollTrigger: { trigger: '[data-reveal-pin]', start: 'top top', end: '+=140%', pin: true, scrub: .6, anticipatePin: 1 } });
    tl.from(['.poster__program', '.poster__stars'], { opacity: 0, y: -16, duration: .3, stagger: .05 }, 0)
      .fromTo('[data-reveal-frame]', { scale: .58, clipPath: 'inset(8% 10% 8% 10% round 40px)' }, { scale: 1, clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1, ease: 'power2.inOut' }, 0)
      .fromTo('[data-reveal-frame] img', { scale: 1 }, { scale: 1, duration: 1 }, 0);
    posterTitle(tl);
    tl.to({}, { duration: .4 }); // hold the finished poster on screen for a moment
  });
  mm0.add('(max-width: 699px)', () => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, scrollTrigger: { trigger: '.poster__photo', start: 'top 75%' } });
    tl.from('[data-reveal-frame]', { scale: .9, opacity: 0, duration: 1.2 });
    posterTitle(tl);
  });

  /* ---------- Affiliations, values ---------- */
  gsap.from('.affil__item', { y: 40, opacity: 0, duration: 1.2, stagger: .15, ease: EASE, scrollTrigger: { trigger: '.affil', start: 'top 85%' } });
  gsap.from('.affil__x', { scaleX: 0, duration: 1.2, ease: 'power3.inOut', scrollTrigger: { trigger: '.affil', start: 'top 85%' } });
  gsap.from('.values__list li', { y: 60, opacity: 0, duration: 1.2, stagger: .1, ease: EASE, scrollTrigger: { trigger: '.values__list', start: 'top 85%' } });

  /* ---------- Photo parallax ---------- */
  $$('[data-parallax]').forEach(el => {
    const amt = +el.dataset.parallax;
    const target = el.tagName === 'IMG' ? el : (el.querySelector('img') || el);
    gsap.fromTo(target, { yPercent: -amt / 2 }, { yPercent: amt / 2, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  gsap.from('.ph', { clipPath: 'inset(18% 18% 18% 18% round 28px)', duration: 1.6, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: '.arena__grid', start: 'top 80%' } });

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
  gsap.from('.alliance span', { scale: .9, opacity: 0, duration: .6, stagger: .07, ease: 'expo.out', scrollTrigger: { trigger: '.alliance', start: 'top 90%' } });
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

  gsap.from('.kickoff__date', { y: 20, opacity: 0, duration: 1, ease: EASE, scrollTrigger: { trigger: '.kickoff', start: 'top 75%' } });
  gsap.from('.clock > div', { y: 50, opacity: 0, rotateX: -60, transformOrigin: '50% 100%', duration: 1.2, stagger: .08, ease: EASE, scrollTrigger: { trigger: '.clock', start: 'top 88%' } });

  /* ---------- Domains: stacking cards ---------- */
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

  /* ---------- Sponsors ---------- */
  gsap.from('.uses li', { y: 30, opacity: 0, duration: 1, stagger: .08, ease: EASE, scrollTrigger: { trigger: '.uses', start: 'top 85%' } });
  gsap.from('.partner__col--get', { y: 80, opacity: 0, rotate: 2, duration: 1.4, ease: EASE, scrollTrigger: { trigger: '.partner', start: 'top 80%' } });

  /* ---------- Enlist + footer ---------- */
  $$('.capband').forEach(c => gsap.from(c, { scaleX: 0, transformOrigin: 'left center', duration: 1.4, ease: 'power3.inOut', scrollTrigger: { trigger: c, start: 'top 95%' } }));
  gsap.from('.pass', { y: 80, opacity: 0, rotate: 3, duration: 1.4, ease: EASE, scrollTrigger: { trigger: '.pass', start: 'top 88%' } });
  const giant = $('[data-giant]');
  giant.innerHTML = [...giant.textContent].map(c => `<span style="display:inline-block">${c}</span>`).join('');
  gsap.from($$('span', giant), { yPercent: 100, opacity: 0, stagger: .04, ease: 'power2.out', scrollTrigger: { trigger: '.footer', start: 'top 85%', end: 'bottom bottom', scrub: true } });

  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
})();
