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
   },
   ------------------------------------------------------------------ */

const POSTS = [
  // Empty for now. Add the first post here.
];

(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TYPES = { outreach: 'Outreach', event: 'Event', build: 'Build', competition: 'Competition' };

  /* Smooth scroll */
  if (!reduce && window.Lenis) {
    const lenis = new Lenis({ lerp: .085 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
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
        ${lead ? `<button class="post__photo" data-photo="${esc(lead.src)}" data-cap="${esc(lead.alt)}"><img src="${esc(lead.src)}" alt="${esc(lead.alt)}" loading="${i < 2 ? 'eager' : 'lazy'}"></button>` : ''}
        <div class="post__body">
          <p class="post__meta"><span class="post__tag post__tag--${esc(p.type)}">${esc(TYPES[p.type] || p.type)}</span><time datetime="${esc(p.date)}">${esc(fmt(p.date))}</time></p>
          <h2 class="post__title">${esc(p.title)}</h2>
          <p class="post__text">${esc(p.text)}</p>
          ${rest.length ? `<div class="post__strip">${rest.map(ph => `<button data-photo="${esc(ph.src)}" data-cap="${esc(ph.alt)}"><img src="${esc(ph.src)}" alt="${esc(ph.alt)}" loading="lazy"></button>`).join('')}</div>` : ''}
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

  /* Lightbox */
  const box = $('[data-lightbox]'), boxImg = $('[data-lightbox-img]'), boxCap = $('[data-lightbox-cap]');
  list.addEventListener('click', e => {
    const b = e.target.closest('[data-photo]'); if (!b) return;
    boxImg.src = b.dataset.photo; boxImg.alt = b.dataset.cap || ''; boxCap.textContent = b.dataset.cap || '';
    box.showModal();
  });
  $('[data-lightbox-close]').addEventListener('click', () => box.close());
  box.addEventListener('click', e => { if (e.target === box) box.close(); });
})();
