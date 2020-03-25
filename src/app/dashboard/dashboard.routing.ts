import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardEstablecimientoComponent } from './dashboard-establecimiento/dashboard-establecimiento.component';

export const DashboardRoutes: Routes = [
  {
    path: 'carta',
    component: DashboardComponent
  },
  {
    path: 'establecimientos',
    component: DashboardEstablecimientoComponent
  }
];
