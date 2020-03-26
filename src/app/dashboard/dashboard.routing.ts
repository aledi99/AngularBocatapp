import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardEstablecimientoComponent } from './dashboard-establecimiento/dashboard-establecimiento.component';
import { DashboardPerfilLocalComponent } from './dashboard-perfil-local/dashboard-perfil-local.component';

export const DashboardRoutes: Routes = [
  {
    path: 'carta',
    component: DashboardComponent
  },
  {
    path: 'establecimientos',
    component: DashboardEstablecimientoComponent
  },
  {
    path: 'me/establecimiento',
    component: DashboardPerfilLocalComponent
  }
];
