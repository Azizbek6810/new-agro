import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/public/public.routes').then((r) => r.PUBLIC_ROUTES),
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./modules/cabinet/cabinet.routes').then((r) => r.CABINET_ROUTES),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found'),
  },
];
