import {
  AdminLayoutComponent,
  AuthLayoutComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  NotificationComponent,
  OptionsComponent,
  SidebarComponent
} from './core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialog,
  MatDialogModule,
  MatInputModule,
  MatFormFieldControl
} from '@angular/material';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BidiModule } from '@angular/cdk/bidi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { NgModule } from '@angular/core';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtModule } from "@auth0/angular-jwt";
import {MatGridListModule} from '@angular/material/grid-list';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CrearProductoDialogComponent } from './crear-producto-dialog/crear-producto-dialog.component';
import { ProductoService } from './productoservice/producto.service';
import { LoginService } from './loginservice/login.service';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from './services/auth.service';

import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { CategoriaComponent } from './categoria/categoria.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 
const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'registro', component: RegistroComponent },
];
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    OptionsComponent,
    MenuComponent,
    AdminLayoutComponent,
    LayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegistroComponent,
    EstablecimientoComponent,
    CategoriaComponent,
    CrearProductoDialogComponent
  ],
  entryComponents: [
    CrearProductoDialogComponent
  ],
  imports: [
    BrowserModule,
    JwtModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BidiModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOURAPIKEY'
    }),
    PerfectScrollbarModule,
    NgMaterialMultilevelMenuModule,
    MatGridListModule,
    FlexLayoutModule,
    AngularFileUploaderModule,
    JwtModule

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ProductoService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
