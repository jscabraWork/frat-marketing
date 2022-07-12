import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Influencer } from '../models/influencer.model';
import { InfluencerService } from '../services/data/influencer.service';

@Component({
  selector: 'app-perfil-influencer',
  templateUrl: './perfil-influencer.component.html',
  styleUrls: ['./perfil-influencer.component.css']
})
export class PerfilInfluencerComponent implements OnInit {

  dashbord:boolean
  metricas:boolean
  requerimientos:boolean 
  constructor(){}

  ngOnInit(): void {
    this.dashbord=true
    this.metricas=false
    this.requerimientos=false
  }

  cambiarEstado(tipo:string){

    if(tipo=='dashbord'){
   
     this.dashbord=true
     this.metricas=false
      this.requerimientos=false
  

   }
   else if(tipo=='requerimientos'){
   
     this.requerimientos=true
     this.dashbord=false
     this.metricas=false
   }
 
  else if(tipo=='metricas'){
   
    this.requerimientos=false

    this.metricas=true
    this.dashbord=false
  }

}
}
