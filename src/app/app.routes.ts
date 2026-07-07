import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/pages/landing-page/landing-page').then(m => m.LandingPage)
  }
];