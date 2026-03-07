import { Routes } from '@angular/router';
import { LoginPage } from './features/login/login.page';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.routes').then((m) => m.routes),
  },
];
