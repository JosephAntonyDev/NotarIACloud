import { FeaturesView } from '../views/FeaturesView.js';
import { featuresModel } from '../models/FeaturesModel.js';

export class FeaturesController {
  constructor(mountSelector) {
    const el = document.querySelector(mountSelector);
    if (!el) return;
    this.view = new FeaturesView(el);
    this.view.render(featuresModel);
  }
}
