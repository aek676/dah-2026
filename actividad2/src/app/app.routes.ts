import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'movie-detail/:id',
    loadComponent: () =>
      import('./features/movie-detail/movie-detail.page').then(
        (m) => m.MovieDetailPage,
      ),
  },
  {
    path: 'movie-card',
    loadComponent: () => import('./features/movie-card/movie-card.page').then( m => m.MovieCardPage)
  },
];
