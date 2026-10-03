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
  /** true = projet pas encore terminé : affiche un badge « En cours » */
  enCours?: boolean;
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
        'Réservation de créneaux avec calendrier, rôles client / administrateur et gestion des conflits de réservation.',
      stack: ['Angular', 'NestJS', 'PostgreSQL'],
      enCours: true,
    },
    {
      titre: 'Portfolio développeur',
      description:
        'Ce site : portfolio responsive et animé, construit avec Angular et déployé dans le cloud.',
      stack: ['Angular', 'SCSS', 'Vercel'],
      code: 'https://github.com/nyadjou-maximekevin/Portfolio',
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
