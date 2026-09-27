import { Component } from '@angular/core';

import { Icon } from '../icon/icon';
import { PROFILE } from '../../profile';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  profil = PROFILE;
  annee = new Date().getFullYear();
}
