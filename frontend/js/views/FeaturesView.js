// ============================================================
// View: Features grid
// Renderiza las tarjetas de "Qué ofrecemos".
// ============================================================

export class FeaturesView {
  constructor(container) {
    this.container = container;
  }

  render(features) {
    const html = features.map((f, idx) => {
      const delay = Math.min((idx % 6) + 1, 6);
      return `
        <article class="feature-card reveal delay-${delay}" data-feature="${f.id}">
          <span class="tag">${f.tag}</span>
          <div class="icon-wrap">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${f.icon}</svg>
          </div>
          <h3>${f.title}</h3>
          <p>${f.description}</p>
        </article>
      `;
    }).join('');

    this.container.innerHTML = html;
  }
}
