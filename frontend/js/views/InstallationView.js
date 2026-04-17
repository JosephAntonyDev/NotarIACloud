// ============================================================
// View: Installation steps
// ============================================================

export class InstallationView {
  constructor(container) {
    this.container = container;
  }

  render(steps) {
    const html = steps.map((s, idx) => {
      const delay = Math.min(idx + 1, 4);
      return `
        <article class="installation-step reveal delay-${delay}">
          <div class="step-number">0${s.step}</div>
          <div class="step-icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${s.icon}</svg>
          </div>
          <h4>${s.title}</h4>
          <p>${s.description}</p>
          <span class="duration">${s.duration}</span>
        </article>
      `;
    }).join('');

    this.container.innerHTML = html;
  }
}
