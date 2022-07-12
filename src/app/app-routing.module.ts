import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaniaComponent } from './dashbord/campania/campania.component';
import { ConfiguracionComponent } from './dashbord/configuracion/configuracion.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/guards/auth.guard';
import { RoleGuard } from './login/guards/role.guard';
import { LoginComponent } from './login/login.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { PerfilInfluencerComponent } from './perfil-influencer/perfil-influencer.component';

const routes: Routes = [
  {
    path:'', 
    component:LoginComponent,
  },
  {
    path:'home', 
    component:MarketingComponent,
    canActivate:[AuthGuard, RoleGuard],data:{role:'ROLE_ADMIN'}
  },
  {
    path:'home/campania', 
    component:CampaniaComponent,
    canActivate:[AuthGuard, RoleGuard],data:{role:'ROLE_ADMIN'}
  },
  {
    path:'home/configuracion', 
    component:ConfiguracionComponent,
    canActivate:[AuthGuard, RoleGuard],data:{role:'ROLE_ADMIN'}
  },
  {
    path:'marketing', 
    component:MarketingComponent,
    canActivate:[AuthGuard, RoleGuard],data:{role:'ROLE_ADMIN'}
  },
  {
    path:'login', 
    component:LoginComponent,
  },
  {
    path:'influencer', 
    component:PerfilInfluencerComponent,
    canActivate:[AuthGuard, RoleGuard],data:{role:'ROLE_INFLUENCER'}
  },
  {
    path:'empresa', 
    component:PerfilEmpresaComponent,
    canActivate:[AuthGuard, RoleGuard],data:{role:'ROLE_EMPRESA'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
