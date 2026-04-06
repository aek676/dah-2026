import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.page').then( m => m.ProductsPage)
  },
];
