import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/pages/landing-page/landing-page').then(m => m.LandingPage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/pages/login/login').then(m => m.Login)
  }
];