import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Icon } from '../icon/icon';
import { Reveal } from '../../reveal.directive';
import { PROFILE } from '../../profile';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Icon, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  profil = PROFILE;

  nom = '';
  email = '';
  message = '';

  /** Ouvre la messagerie du visiteur avec le message pré-rempli */
  envoyer() {
    const sujet = encodeURIComponent(`Contact portfolio - ${this.nom}`);
    const corps = encodeURIComponent(`${this.message}\n\n${this.nom} (${this.email})`);
    window.location.href = `mailto:${this.profil.email}?subject=${sujet}&body=${corps}`;
  }
}
