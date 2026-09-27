import { Component } from '@angular/core';

import { Icon } from '../icon/icon';
import { PROFILE } from '../../profile';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  profil = PROFILE;
  initiales = PROFILE.prenom[0] + PROFILE.nom[0];
  technos = ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL'];
}
