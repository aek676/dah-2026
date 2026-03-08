import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../clients/clients.page').then((m) => m.ClientsPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../reservations/reservations.page').then((m) => m.ReservationsPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: 'client/:id',
        loadComponent: () =>
          import('../clients/client-detail.page').then((m) => m.ClientDetailPage),
      },
      {
        path: 'reservations/create',
        loadComponent: () =>
          import('../reservations/reservation-form.page').then((m) => m.ReservationFormPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full',
  },
];
