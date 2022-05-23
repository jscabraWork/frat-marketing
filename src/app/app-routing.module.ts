import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path:'marketing', 
    component:MarketingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
