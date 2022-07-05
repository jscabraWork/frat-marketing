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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametrosCampaniaComponent } from './dashbord/campania/parametros-campania/parametros-campania.component';
import { PerfilamientoComponent } from './dashbord/campania/perfilamiento/perfilamiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { RelationsComponent } from './dashbord/relations/relations.component';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; // a plugin!




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
          ParametrosCampaniaComponent,
          PerfilamientoComponent,
          RelationsComponent,
         
         
         
         
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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
