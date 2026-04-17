import { PartnersView } from '../views/PartnersView.js';
import { partnersModel } from '../models/PartnersModel.js';

export class PartnersController {
  constructor(mountSelector) {
    const el = document.querySelector(mountSelector);
    if (!el) return;
    this.view = new PartnersView(el);
    this.view.render(partnersModel);
  }
}
