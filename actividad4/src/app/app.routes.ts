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
  {
    path: 'add-product',
    loadComponent: () => import('./features/add-product/add-product.page').then( m => m.AddProductPage)
  },
  {
    path: 'products-list',
    loadComponent: () => import('./features/products-list/products-list.page').then( m => m.ProductsListPage)
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./features/product-details/product-details.page').then( m => m.ProductDetailsPage)
  },
];
