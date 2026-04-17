import { PlansView } from '../views/PlansView.js';
import { plansModel } from '../models/PlansModel.js';

export class PlansController {
  constructor(mountSelector) {
    const el = document.querySelector(mountSelector);
    if (!el) return;
    this.view = new PlansView(el);
    this.billing = 'monthly';
    this.view.render(plansModel, this.billing);
    this._bindToggle();
  }

  _bindToggle() {
    const toggle = document.getElementById('billingToggle');
    const dot = document.getElementById('billingDot');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const yearlyLabel = document.getElementById('yearlyLabel');
    if (!toggle || !dot || !monthlyLabel || !yearlyLabel) return;

    toggle.addEventListener('click', () => {
      this.billing = this.billing === 'monthly' ? 'yearly' : 'monthly';

      dot.classList.toggle('yearly', this.billing === 'yearly');

      if (this.billing === 'yearly') {
        yearlyLabel.classList.remove('text-ink-700/60');
        yearlyLabel.classList.add('text-ink-900');
        monthlyLabel.classList.add('text-ink-700/60');
        monthlyLabel.classList.remove('text-ink-900');
      } else {
        monthlyLabel.classList.remove('text-ink-700/60');
        monthlyLabel.classList.add('text-ink-900');
        yearlyLabel.classList.add('text-ink-700/60');
        yearlyLabel.classList.remove('text-ink-900');
      }

      this.view.updatePrices(this.billing);
    });
  }
}
