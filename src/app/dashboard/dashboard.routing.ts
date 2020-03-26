import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { EstablecimientoComponent } from '../establecimiento/establecimiento.component';

export const DashboardRoutes: Routes = [
  {
    path: '',

    component: DashboardComponent
  },

  {
    path: 'usuario',
    component: UsuarioComponent
  },

  {
    path: 'registrarEstablecimiento',
    component: EstablecimientoComponent
  }


];
