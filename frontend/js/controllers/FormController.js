// ============================================================
// FormController: valida y envía el formulario de contacto.
// En modo demo, simula el envío con un delay y muestra confirmación.
// Se puede apuntar a la API real (/api/contact) cuando esté disponible.
// ============================================================

export class FormController {
  constructor(formSelector, endpoint = null) {
    this.form = document.querySelector(formSelector);
    this.endpoint = endpoint;
    this.messageEl = document.getElementById('formMessage');
    if (!this.form) return;
    this._bind();
  }

  _bind() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = this.form.querySelector('button[type="submit"]');
      const originalHtml = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = `
        <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
        Enviando...
      `;

      const data = Object.fromEntries(new FormData(this.form));

      try {
        if (this.endpoint) {
          const res = await fetch(this.endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          if (!res.ok) throw new Error('Respuesta inválida');
        } else {
          await new Promise(r => setTimeout(r, 1100));
        }

        this._showMessage('¡Gracias! Le contactaremos en las próximas 24 horas.', 'success');
        this.form.reset();
      } catch (err) {
        this._showMessage('Hubo un problema. Intente de nuevo o escríbanos por WhatsApp.', 'error');
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
      }
    });
  }

  _showMessage(text, type) {
    if (!this.messageEl) return;
    this.messageEl.textContent = text;
    this.messageEl.classList.remove('hidden', 'text-green-400', 'text-red-400');
    this.messageEl.classList.add(type === 'success' ? 'text-green-400' : 'text-red-400');

    setTimeout(() => {
      this.messageEl.classList.add('hidden');
    }, 6000);
  }
}
