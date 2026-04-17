// ============================================================
// View: Notarías asociadas
// ============================================================

export class PartnersView {
  constructor(container) {
    this.container = container;
  }

  render(partners) {
    const html = partners.map((p, idx) => {
      const delay = Math.min(idx + 1, 4);

      if (p.type === 'empty') {
        return `
          <div class="partner-card empty reveal delay-${delay}">
            <div>
              <div class="empty-title">${p.emptyTitle}</div>
              <p>${p.emptyMessage}</p>
            </div>
          </div>
        `;
      }

      const statsHtml = p.stats.map(s => `
        <div>
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('');

      const badgeHtml = p.badge
        ? `<span class="partner-badge">${p.badge}</span>`
        : '';

      return `
        <article class="partner-card reveal delay-${delay}" data-partner="${p.id}">
          ${badgeHtml}
          <div class="partner-seal">
            <span class="font-serif text-2xl font-bold text-gold-400">${p.initials}</span>
          </div>
          <h3>${p.name}</h3>
          <div class="partner-location">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            ${p.location}
          </div>
          <div class="partner-holder">Titular</div>
          <div class="partner-name">${p.holder}</div>
          <div class="partner-stats">${statsHtml}</div>
        </article>
      `;
    }).join('');

    this.container.innerHTML = html;
  }
}
