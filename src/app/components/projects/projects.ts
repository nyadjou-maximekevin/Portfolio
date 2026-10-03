import { Component } from '@angular/core';

import { Icon } from '../icon/icon';
import { Reveal } from '../../reveal.directive';

interface Projet {
  titre: string;
  description: string;
  stack: string[];
  /** Lien vers le code (GitHub) — laisser vide pour masquer le bouton */
  code?: string;
  /** Lien vers la démo en ligne — laisser vide pour masquer le bouton */
  demo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projets: Projet[] = [
    {
      titre: 'Gestion de dépenses',
      description:
        'Application Full Stack en ligne : authentification JWT, suivi des dépenses par mois et catégorie, statistiques calculées en SQL et graphiques.',
      stack: ['Angular', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT'],
      code: 'https://github.com/nyadjou-maximekevin/gestion-depense',
      demo: 'https://gestion-depense-rosy.vercel.app',
    },
    {
      titre: 'Plateforme de réservation',
      description:
        'Réservation en ligne avec calendrier interactif, espace administrateur et gestion des disponibilités.',
      stack: ['Angular', 'SCSS', 'TypeScript'],
    },
    {
      titre: 'Portfolio développeur',
      description:
        'Ce site : portfolio responsive et animé, construit avec Angular et déployé dans le cloud.',
      stack: ['Angular', 'SCSS', 'Vercel'],
    },
  ];

  /** Fait suivre le halo lumineux de la carte au curseur */
  spotlight(event: MouseEvent) {
    const carte = event.currentTarget as HTMLElement;
    const rect = carte.getBoundingClientRect();
    carte.style.setProperty('--x', `${event.clientX - rect.left}px`);
    carte.style.setProperty('--y', `${event.clientY - rect.top}px`);
  }
}
