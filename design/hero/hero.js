/* Hero design options: mount the 3D scene(s), run the entrance, keep the countdown live. */
(() => {
  const go = () => {
    document.querySelectorAll('[data-hero3d]').forEach(el => {
      let o = {}; try { o = JSON.parse(el.dataset.hero3d); } catch { /* keep defaults */ }
      if (window.Hero3D) window.Hero3D.mount(el, Object.assign({ badge: '../../assets/badge-520.webp' }, o));
    });
    requestAnimationFrame(() => document.querySelectorAll('[data-in]').forEach(el => el.classList.add('is-in')));
    // days to kickoff (9 January 2027, 9:00 IST)
    const kick = new Date('2027-01-09T09:00:00+05:30');
    document.querySelectorAll('[data-days]').forEach(el => { el.textContent = Math.max(0, Math.ceil((kick - Date.now()) / 864e5)); });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
