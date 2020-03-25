import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardEstablecimientoComponent } from './dashboard-establecimiento/dashboard-establecimiento.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  declarations: [DashboardComponent, DashboardEstablecimientoComponent]
})
export class DashboardModule {}
