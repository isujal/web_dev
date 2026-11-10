/* The Ducktators · page transition fallback
   Chrome, Edge and Safari 18.2+ animate between pages natively (see "Page transitions" in css/style.css).
   Other browsers get the same look from here: the page sinks out, the next one rises in. */
(() => {
  const html = document.documentElement;
  const done = () => html.classList.remove('pt-enter');
  if (html.classList.contains('pt-enter')) setTimeout(done, 900);
  addEventListener('pageshow', e => { if (e.persisted) html.classList.remove('pt-leave', 'pt-enter'); });

  const native = 'onpagereveal' in window && !!document.startViewTransition;
  if (native || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.pathname.replace(/index\.html$/, '') === location.pathname.replace(/index\.html$/, '')) return;
    e.preventDefault();
    try { sessionStorage.setItem('pt', '1'); } catch {}
    html.classList.add('pt-leave');
    setTimeout(() => { location.href = url.href; }, 400);
  });
})();
