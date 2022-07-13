import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';

import { AdministradoresComponent } from './administradores/administradores.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SeguimientoComponent } from './dashbord/seguimiento/seguimiento.component';
import { CampaniaComponent } from './dashbord/campania/campania.component';
import { BaseDeDatosComponent } from './dashbord/base-de-datos/base-de-datos.component';
import { ProspeccionComponent } from './dashbord/prospeccion/prospeccion.component';
import { RequerimientosComponent } from './dashbord/campania/requerimientos/requerimientos.component';
import { InformesComponent } from './dashbord/informes/informes.component';
import { ConfiguracionComponent } from './dashbord/configuracion/configuracion.component';
import { CampaniasActivasComponent } from './dashbord/campania/campanias-activas/campanias-activas.component';
import { CrearCampaniasComponent } from './dashbord/campania/crear-campanias/crear-campanias.component';
import { MetricasComponent } from './dashbord/metricas/metricas.component';
import { CrearInfluencerComponent } from './dashbord/configuracion/crear-influencer/crear-influencer.component';
import { CrearClienteComponent } from './dashbord/configuracion/crear-cliente/crear-cliente.component';
import { CrearResponsableComponent } from './dashbord/configuracion/crear-responsable/crear-responsable.component';
import { CrearIndustriaComponent } from './dashbord/configuracion/crear-industria/crear-industria.component';
import { CrearParametrosComponent } from './dashbord/configuracion/crear-parametros/crear-parametros.component';
import { FiltrarComponent } from './dashbord/campania/perfilamiento/filtrar/filtrar.component';

import { CrearParametrosInfluenceadorComponent } from './dashbord/configuracion/crear-parametros-influenceador/crear-parametros-influenceador.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfilamientoComponent } from './dashbord/campania/perfilamiento/perfilamiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { RelationsComponent } from './dashbord/relations/relations.component';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; // a plugin!
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';


import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PerfilInfluencerComponent } from './perfil-influencer/perfil-influencer.component';
import { LoginComponent } from './login/login.component';
import { RequerimientosInfluencerComponent } from './perfil-influencer/requerimientos-influencer/requerimientos-influencer.component';
import { CargarMetricasComponent } from './perfil-influencer/cargar-metricas/cargar-metricas.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { DashbordEmpresaComponent } from './perfil-empresa/dashbord-empresa/dashbord-empresa.component';
import { CampaniasEmpresaComponent } from './perfil-empresa/campanias-empresa/campanias-empresa.component';
import { DashbordInfluencerComponent } from './perfil-influencer/dashbord-influencer/dashbord-influencer.component';
import { TokenInterceptor } from './login/interceptors/token.interceptor';
import { AuthInterceptor } from './login/interceptors/auth.interceptor';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MarketingComponent,
    
    AdministradoresComponent,
    
    DashbordComponent,
         SeguimientoComponent,
         CampaniaComponent,
         BaseDeDatosComponent,
         ProspeccionComponent,
         RequerimientosComponent,
         InformesComponent,
         ConfiguracionComponent,
         CampaniasActivasComponent,
         CrearCampaniasComponent,
         MetricasComponent,
         CrearInfluencerComponent,
         CrearClienteComponent,
         CrearResponsableComponent,
         CrearIndustriaComponent,
         CrearParametrosComponent,
         FiltrarComponent,

         CrearParametrosInfluenceadorComponent,
  
          PerfilamientoComponent,
          RelationsComponent,
          PerfilInfluencerComponent,
          LoginComponent,
          RequerimientosInfluencerComponent,
          CargarMetricasComponent,
          PerfilEmpresaComponent,
          DashbordEmpresaComponent,
          CampaniasEmpresaComponent,
          DashbordInfluencerComponent,
         
         
         
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    IvyCarouselModule
  


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
