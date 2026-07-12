import { Routes } from '@angular/router';
import { MainLayout } from './components/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/pages/landing-page/landing-page').then(m => m.LandingPage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/pages/login/login').then(m => m.Login)
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./components/pages/signup/signup').then(m => m.Signup)
  },
  {
    path: 'batalha/:questId',
    loadComponent: () =>
      import('./components/pages/battle/battle').then(m => m.Battle)
  },
  {
    path: 'desafio-semanal/:challengeId',
    loadComponent: () =>
      import('./components/pages/battle/battle').then(m => m.Battle)
  },
  {
    path: 'duelo/:matchId',
    loadComponent: () =>
      import('./components/pages/home/duel/duel').then(m => m.Duel)
  },
  {
    path: 'solucoes-comunidade',
    loadComponent: () =>
      import('./components/pages/community-solutions/community-solutions').then(m => m.CommunitySolutions)
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'masmorra',
        loadComponent: () =>
          import('./components/pages/home/masmorra/masmorra').then(m => m.Masmorra)
      },
      {
        path: 'academia',
        loadComponent: () =>
          import('./components/pages/home/academia/academia').then(m => m.Academia)
      },
      {
        path: 'academia/modulo/:moduleId',
        loadComponent: () =>
          import('./components/pages/module-page/module-page').then(m => m.ModulePage)
      },
      {
        path: 'academia/licao/:lessonId',
        loadComponent: () =>
          import('./components/pages/lesson-page/lesson-page').then(m => m.LessonPage)
      },
      {
        path: 'arena',
        loadComponent: () =>
          import('./components/pages/home/arena/arena').then(m => m.Arena)
      },
      {
        path: 'taberna',
        loadComponent: () =>
          import('./components/pages/home/taberna/taberna').then(m => m.Taberna)
      },
      {
        path: 'oficina',
        loadComponent: () =>
          import('./components/pages/home/oficina/oficina').then(m => m.Oficina)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];