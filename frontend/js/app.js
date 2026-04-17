// ============================================================
// NotarIA Cloud — Entry point
// Arquitectura: MVC vanilla (models + views + controllers).
// Cada controller es autónomo y se monta sobre su selector.
// ============================================================

import { NavController }          from './controllers/NavController.js';
import { RevealController }       from './controllers/RevealController.js';
import { CounterController }      from './controllers/CounterController.js';
import { FeaturesController }     from './controllers/FeaturesController.js';
import { InstallationController } from './controllers/InstallationController.js';
import { PlansController }        from './controllers/PlansController.js';
import { PartnersController }     from './controllers/PartnersController.js';
import { FormController }         from './controllers/FormController.js';

class App {
  constructor() {
    this._bootstrap();
  }

  _bootstrap() {
    // 1) Montar vistas dinámicas primero (así cuando corre RevealController
    //    ya existen los .reveal generados por JS).
    new FeaturesController('#featuresGrid');
    new InstallationController('#installationSteps');
    new PlansController('#pricingGrid');
    new PartnersController('#partnersGrid');

    // 2) Interacción global / UX
    new NavController();
    new RevealController();
    new CounterController();

    // 3) Formulario de contacto (endpoint opcional)
    new FormController('#contactForm', null);

    // 4) Footer: año actual
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
