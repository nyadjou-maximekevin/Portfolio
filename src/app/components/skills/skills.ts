import { Component } from '@angular/core';

import { Icon, IconName } from '../icon/icon';
import { Reveal } from '../../reveal.directive';

interface Competence {
  nom: string;
  categorie: string;
  icone: IconName;
  /** Niveau en pourcentage (0 à 100) */
  niveau: number;
}

@Component({
  selector: 'app-skills',
  imports: [Icon, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  competences: Competence[] = [
    { nom: 'Angular', categorie: 'Frontend', icone: 'code', niveau: 80 },
    { nom: 'TypeScript', categorie: 'Langage', icone: 'code', niveau: 85 },
    { nom: 'NestJS', categorie: 'Backend', icone: 'server', niveau: 80 },
    { nom: 'PostgreSQL', categorie: 'Base de données', icone: 'database', niveau: 60 },
  ];
}
