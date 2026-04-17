import { InstallationView } from '../views/InstallationView.js';
import { installationModel } from '../models/InstallationModel.js';

export class InstallationController {
  constructor(mountSelector) {
    const el = document.querySelector(mountSelector);
    if (!el) return;
    this.view = new InstallationView(el);
    this.view.render(installationModel);
  }
}
