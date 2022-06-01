import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaniaComponent } from './dashbord/campania/campania.component';
import { ConfiguracionComponent } from './dashbord/configuracion/configuracion.component';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';

const routes: Routes = [
  {
    path:'', 
    component:MarketingComponent,
  },
  {
    path:'home', 
    component:MarketingComponent,
  },
  {
    path:'home/campania', 
    component:CampaniaComponent,
  },
  {
    path:'home/configuracion', 
    component:ConfiguracionComponent,
  },
  {
    path:'marketing', 
    component:MarketingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
