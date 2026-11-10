/* The Ducktators · Updates page
   ------------------------------------------------------------------
   HOW TO ADD A POST
   1. Put the photos in assets/updates/ (JPG or WebP, about 1600px wide is plenty).
   2. Add an entry to POSTS below. Newest first is not required; the page sorts by date.
   3. Only post photos of students whose families have signed the consent form.

   {
     date: '2027-01-09',                       // YYYY-MM-DD
     type: 'event',                            // 'outreach' | 'event' | 'build' | 'competition'
     title: 'Kickoff 2027: the game is revealed',
     text: 'What happened, in two to four sentences.',
     photos: [                                 // optional, any number
       { src: 'assets/updates/kickoff-1.jpg', alt: 'The team watching the game reveal' },
     ],
     link: { href: 'https://…', label: 'Watch the reveal' },   // optional
     place: 'CAJCS assembly hall',             // optional
     stats: [{ n: '120', label: 'students' }], // optional: real numbers only, they feed the Impact record
   },
   Photos can also have card: 'assets/updates/x-1600.webp' (1600px, shown on the page) and
   thumb: 'assets/updates/x-thumb.webp' (480px, the small strip). src is the full-size photo for the viewer.
   ------------------------------------------------------------------ */

const POSTS = [
  {
    date: '2026-10-28',
    type: 'outreach',
    title: 'Recruitment day at the CAJCS Senior School',
    place: 'CAJCS Senior School assembly hall · 8 am',
    stats: [{ n: '120', label: 'students attended' }],
    text: 'On Wednesday 28 October, 120 students joined us in the Senior School assembly hall. We gave an overview of the FIRST Robotics Competition, explained how The Ducktators work across our seven domains, and brought last season’s robot from our sister team, the Paraducks. Students drove it, looked inside the electronics and asked questions until the bell, and we left with a long list of names and registrations for the team.',
    photos: [
      { src: 'assets/updates/recruitment-crowd.webp', card: 'assets/updates/recruitment-crowd-1600.webp', thumb: 'assets/updates/recruitment-crowd-thumb.webp', alt: 'Students crowding around the Paraducks robot, loaded with yellow game pieces, in the CAJCS assembly hall' },
      { src: 'assets/updates/recruitment-overview.webp', card: 'assets/updates/recruitment-overview-1600.webp', thumb: 'assets/updates/recruitment-overview-thumb.webp', alt: 'The FRC overview on the assembly hall screen, titled "Cathedral is starting a robotics team", with the robot on stage' },
      { src: 'assets/updates/recruitment-driving.webp', card: 'assets/updates/recruitment-driving-1600.webp', thumb: 'assets/updates/recruitment-driving-thumb.webp', alt: 'A student drives the Paraducks robot across the hall floor while others watch' },
      { src: 'assets/updates/recruitment-electronics.webp', card: 'assets/updates/recruitment-electronics-1600.webp', thumb: 'assets/updates/recruitment-electronics-thumb.webp', alt: 'Students bend down to look at the robot’s electronics board' },
      { src: 'assets/updates/recruitment-game-piece.webp', card: 'assets/updates/recruitment-game-piece-1600.webp', thumb: 'assets/updates/recruitment-game-piece-thumb.webp', alt: 'A team member explains a game piece to a group of students' },
      { src: 'assets/updates/recruitment-driver-station.webp', card: 'assets/updates/recruitment-driver-station-1600.webp', thumb: 'assets/updates/recruitment-driver-station-thumb.webp', alt: 'The robot glowing orange on stage beside a laptop running the driver station dashboard' },
      { src: 'assets/updates/recruitment-hall.webp', card: 'assets/updates/recruitment-hall-1600.webp', thumb: 'assets/updates/recruitment-hall-thumb.webp', alt: 'A wide view of students gathered around the robot below the school crest' },
    ],
  },
];

(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TYPES = { outreach: 'Outreach', event: 'Event', build: 'Build', competition: 'Competition' };

  /* Smooth scroll */
  if (!reduce && window.Lenis) {
    const lenis = new Lenis({ lerp: .085 }); window.__lenis = lenis;
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  /* Vanta NET background in the header: wide screens only, never with reduced motion.
     three.js (~600 KB) is fetched only here, after the page has loaded. */
  const vantaEl = $('[data-vanta]');
  if (vantaEl && !reduce && matchMedia('(min-width: 700px)').matches) {
    const load = src => new Promise((ok, fail) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = fail; document.head.append(s); });
    addEventListener('load', async () => {
      try {
        await load('vendor/three.r134.min.js');
        await load('vendor/vanta.net.min.js');
        const fx = window.VANTA.NET({
          el: vantaEl, THREE: window.THREE, mouseControls: true, touchControls: false, gyroControls: false,
          scale: 1, scaleMobile: 1, color: 0x8b3dff, backgroundColor: 0x000000, backgroundAlpha: 0,
          points: 11, maxDistance: 21, spacing: 17, showDots: true,
        });
        vantaEl.classList.add('is-on');
        /* Pause control: anything that moves for more than 5 s gets one (WCAG 2.2.2) */
        const tog = $('[data-vanta-toggle]'), label = $('[data-vanta-label]');
        if (tog && fx) {
          tog.hidden = false;
          tog.addEventListener('click', () => {
            const paused = tog.getAttribute('aria-pressed') !== 'true';
            if (paused) cancelAnimationFrame(fx.req); else { fx.prevNow = 0; fx.animationLoop(); }
            tog.setAttribute('aria-pressed', String(paused));
            label.textContent = paused ? 'Play background' : 'Pause background';
          });
        }
      } catch { /* the gradient header stays as the fallback */ }
    }, { once: true });
  }

  /* Mobile menu */
  const menuBtn = $('[data-menu]'), drawer = $('#drawer');
  const setMenu = open => { menuBtn.setAttribute('aria-expanded', String(open)); drawer.hidden = !open; document.documentElement.classList.toggle('menu-open', open); document.body.style.overflow = open ? 'hidden' : ''; };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) { setMenu(false); menuBtn.focus(); } });

  /* Render posts */
  const list = $('[data-posts]'), empty = $('[data-empty]'), emptyText = $('[data-empty-text]');
  const fmt = d => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const posts = [...POSTS].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  list.innerHTML = posts.map((p, i) => {
    const photos = p.photos || [];
    const lead = photos[0];
    const rest = photos.slice(1);
    return `
      <li class="post" data-type="${esc(p.type)}">
        ${lead ? `<button class="post__photo" type="button" data-post="${i}" data-idx="0" aria-label="Open photo: ${esc(lead.alt)}"><img src="${esc(lead.card || lead.src)}"${lead.card ? ` srcset="${esc(lead.thumb || lead.card)} 480w, ${esc(lead.card)} 1600w, ${esc(lead.src)} 2560w" sizes="(min-width: 900px) 56vw, 100vw"` : ''} alt="" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async"${i === 0 ? ' fetchpriority="high"' : ''}></button>` : ''}
        <div class="post__body">
          <p class="post__meta"><span class="post__tag post__tag--${esc(p.type)}">${esc(TYPES[p.type] || p.type)}</span><time datetime="${esc(p.date)}">${esc(fmt(p.date))}</time></p>
          <h2 class="post__title">${esc(p.title)}</h2>
          ${p.place ? `<p class="post__place"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>${esc(p.place)}</p>` : ''}
          ${(p.stats || []).length ? `<dl class="post__stats">${p.stats.map(s => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.n)}</dd></div>`).join('')}</dl>` : ''}
          <p class="post__text">${esc(p.text)}</p>
          ${rest.length ? `<div class="post__strip">${rest.map((ph, k) => `<button type="button" data-post="${i}" data-idx="${k + 1}" aria-label="Open photo: ${esc(ph.alt)}"><img src="${esc(ph.thumb || ph.card || ph.src)}" alt="" loading="lazy" decoding="async" width="84" height="64"></button>`).join('')}</div>` : ''}
          ${p.link ? `<a class="post__link" href="${esc(p.link.href)}" rel="noopener">${esc(p.link.label || 'Read more')} →</a>` : ''}
        </div>
      </li>`;
  }).join('');

  /* Filters */
  let current = 'all';
  const apply = () => {
    let shown = 0;
    $$('.post', list).forEach(li => { const on = current === 'all' || li.dataset.type === current; li.hidden = !on; if (on) shown++; });
    empty.hidden = shown > 0;
    if (!posts.length) emptyText.textContent = 'Outreach days, events, build-season diaries and photos will appear here as the season happens. The first big moment is Kickoff on Saturday 9 January 2027.';
    else if (!shown) emptyText.textContent = `No ${TYPES[current].toLowerCase()} posts yet. Try another filter.`;
  };
  $$('[data-filter]').forEach(b => b.addEventListener('click', () => {
    current = b.dataset.filter;
    $$('[data-filter]').forEach(x => x.setAttribute('aria-selected', String(x === b)));
    apply();
  }));
  apply();

  /* Photo viewer (js/lightbox.js): all photos of a post, starting at the one tapped */
  /* phones and small screens get the 1600 px copy (sharp at their size, loads faster); big screens the full photo */
  const bigScreen = () => Math.max(innerWidth, innerHeight) * Math.min(devicePixelRatio || 1, 2) > 1900;
  const fullOf = ph => (bigScreen() || !ph.card) ? ph.src : ph.card;
  const itemsOf = n => (posts[n].photos || []).map(ph => ({ src: fullOf(ph), thumb: ph.thumb || ph.card || ph.src, alt: ph.alt }));
  list.addEventListener('click', e => {
    const b = e.target.closest('[data-post]'); if (!b || !window.Lightbox) return;
    Lightbox.open(itemsOf(+b.dataset.post), +b.dataset.idx, b);
  });
  /* start downloading the full photo the moment a finger or pointer lands on it */
  const warm = e => { const b = e.target.closest?.('[data-post]'); if (b && window.Lightbox) Lightbox.prefetch(fullOf(posts[+b.dataset.post].photos[+b.dataset.idx])); };
  list.addEventListener('pointerover', warm); list.addEventListener('touchstart', warm, { passive: true }); list.addEventListener('focusin', warm);
})();
