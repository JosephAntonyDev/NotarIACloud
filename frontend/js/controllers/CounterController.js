// ============================================================
// CounterController: anima los números con [data-counter].
// Se dispara la primera vez que el elemento entra al viewport.
// ============================================================

export class CounterController {
  constructor() {
    this.nodes = document.querySelectorAll('[data-counter]');
    this._observe();
  }

  _observe() {
    if (!this.nodes.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this._animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    this.nodes.forEach(n => observer.observe(n));
  }

  _animate(node) {
    const target = Number(node.dataset.counter) || 0;
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      node.textContent = value;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
