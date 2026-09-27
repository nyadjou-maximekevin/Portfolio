import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

import { Icon } from '../icon/icon';
import { PROFILE } from '../../profile';

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Navbar implements AfterViewInit, OnDestroy {
  initiales = PROFILE.prenom[0] + PROFILE.nom[0];

  liens = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' },
  ];

  scrolled = signal(false);
  menuOuvert = signal(false);
  sectionActive = signal('accueil');

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined') return;

    // Une section est "active" quand elle traverse le milieu de l'écran
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.sectionActive.set(entry.target.id);
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    for (const lien of this.liens) {
      const section = document.getElementById(lien.id);
      if (section) this.observer.observe(section);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOuvert.update((ouvert) => !ouvert);
  }

  fermerMenu() {
    this.menuOuvert.set(false);
  }
}
