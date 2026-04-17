// ============================================================
// NavController: navbar sticky, menú mobile, active link, scroll progress.
// ============================================================

export class NavController {
  constructor() {
    this.nav = document.getElementById('navbar');
    this.menuToggle = document.getElementById('menuToggle');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.links = document.querySelectorAll('.nav-link');

    this._createScrollProgress();
    this._bindScroll();
    this._bindMenu();
    this._bindSmoothScroll();
    this._bindActiveLink();
  }

  _createScrollProgress() {
    const bar = document.createElement('div');
    bar.id = 'scrollProgress';
    document.body.appendChild(bar);
    this.progressBar = bar;
  }

  _bindScroll() {
    let ticking = false;
    const update = () => {
      const scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min((scrollY / max) * 100, 100);
      this.progressBar.style.width = `${pct}%`;

      if (scrollY > 30) {
        this.nav.classList.add('scrolled');
      } else {
        this.nav.classList.remove('scrolled');
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  _bindMenu() {
    if (!this.menuToggle || !this.mobileMenu) return;
    this.menuToggle.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('hidden');
    });
    this.mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        this.mobileMenu.classList.add('hidden');
      });
    });
  }

  _bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  _bindActiveLink() {
    const sections = ['caracteristicas', 'seguridad', 'instalacion', 'planes', 'asociadas', 'contacto']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          this.links.forEach(l => {
            const href = l.getAttribute('href') || '';
            l.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }
}
