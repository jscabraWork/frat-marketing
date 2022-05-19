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
import { RequerimientosComponent } from './dashbord/requerimientos/requerimientos.component';
import { InformesComponent } from './dashbord/informes/informes.component';
import { ConfiguracionComponent } from './dashbord/configuracion/configuracion.component';

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
         ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
