import { Routes } from '@angular/router';
import { CabinetLayout } from './cabinet-layout/cabinet-layout';

export const CABINET_ROUTES: Routes = [
  {
    path: '',
    component: CabinetLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard'),
      },
    ],
  },
];
