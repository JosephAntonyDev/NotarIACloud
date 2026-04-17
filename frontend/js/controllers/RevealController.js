// ============================================================
// RevealController: aplica .in-view a elementos con clases .reveal*
// cuando entran al viewport. Usa IntersectionObserver.
// ============================================================

export class RevealController {
  constructor() {
    this.selector = '.reveal, .reveal-right, .reveal-left, .reveal-scale';
    this._observe();
  }

  _observe() {
    const elements = document.querySelectorAll(this.selector);
    if (!elements.length || !('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /** Re-observa elementos renderizados dinámicamente */
  refresh() {
    this._observe();
  }
}
