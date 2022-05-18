import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { CampaniasComponent } from './campanias/campanias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MarketingComponent,
    InfluencersComponent,
    AdministradoresComponent,
    CampaniasComponent,
    DashbordComponent
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
