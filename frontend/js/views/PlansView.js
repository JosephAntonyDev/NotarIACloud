// ============================================================
// View: Pricing cards
// Maneja render inicial + actualización de precios al cambiar el toggle.
// ============================================================

export class PlansView {
  constructor(container) {
    this.container = container;
  }

  /** Formatea a "$ 3,499" */
  static formatCurrency(value) {
    if (typeof value === 'string') return value;
    return value.toLocaleString('es-MX');
  }

  render(plans, billing = 'monthly') {
    const html = plans.map((p, idx) => {
      const price = billing === 'monthly' ? p.monthly : p.yearly;
      const delay = Math.min(idx + 1, 6);
      const featuredClass = p.featured ? 'featured' : '';
      const ctaClass = p.ctaStyle === 'primary' ? 'cta-primary' : 'cta-secondary';
      const badgeHtml = p.badge
        ? `<div class="pricing-badge">${p.badge}</div>`
        : '';

      const featuresHtml = p.features
        .map(f => `<li>${f}</li>`)
        .join('');

      const setupLabel = typeof p.setup === 'number'
        ? `+ $${PlansView.formatCurrency(p.setup)} MXN instalación (único)`
        : `Instalación ${p.setup}`;

      return `
        <article class="pricing-card ${featuredClass} reveal delay-${delay}" data-plan="${p.id}">
          ${badgeHtml}
          <h3>${p.name}</h3>
          <p class="desc">${p.description}</p>

          <div class="pricing-price">
            <span class="currency">$</span>
            <span class="amount" data-monthly="${p.monthly}" data-yearly="${p.yearly}">${PlansView.formatCurrency(price)}</span>
            <span class="period">MXN / mes</span>
          </div>
          <div class="setup-note">${setupLabel}</div>

          <ul class="pricing-features">${featuresHtml}</ul>

          <a href="#contacto" class="cta ${ctaClass}">
            Empezar con ${p.name}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </article>
      `;
    }).join('');

    this.container.innerHTML = html;
  }

  /** Anima el cambio de precios con un "cuenta regresiva" suave */
  updatePrices(billing) {
    const amountNodes = this.container.querySelectorAll('.amount');
    amountNodes.forEach(node => {
      const target = billing === 'monthly'
        ? Number(node.dataset.monthly)
        : Number(node.dataset.yearly);
      const current = Number(node.textContent.replace(/[^0-9]/g, '')) || target;
      PlansView._tweenNumber(node, current, target, 600);
    });
  }

  static _tweenNumber(node, from, to, duration) {
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(from + (to - from) * eased);
      node.textContent = PlansView.formatCurrency(value);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
