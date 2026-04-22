import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'new-incidence',
    loadComponent: () => import('./features/new-incidence/new-incidence.page').then((m) => m.NewIncidencePage),
  },
  {
    path: 'incidence-list',
    loadComponent: () => import('./features/incidence-list/incidence-list.page').then((m) => m.IncidenceListPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
