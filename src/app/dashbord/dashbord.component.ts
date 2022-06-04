import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { }
  seguimiento:boolean = false;
  metricas:boolean = false
  bd:boolean = false;
  prospeccion:boolean = true;
  requerimientos:boolean = false;
  informes:boolean = false;
  configuracion:boolean = false;
  
  ngOnInit(): void {
    this.bd =false;
  }
  cambiarEstado(tipo:string){

     if(tipo=='seguimiento'){
    
      this.bd=false
      this.seguimiento=true
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
      this.metricas = false
    }
    else if(tipo=='metricas'){
    
      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
      this.metricas = true
    }
    else if(tipo=='bd'){
    
      this.bd=true
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
      this.metricas = false
    }
    else if(tipo=='prospeccion'){
     
      this.bd=false
      this.seguimiento=false
      this.prospeccion=true
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
      this.metricas = false
    }
    else if(tipo=='requerimientos'){
      
      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=true
      this.informes=false
      this.configuracion=false
      this.metricas = false
    }
    else if(tipo=='informes'){
     
      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=true
      this.configuracion=false
      this.metricas = false
    }
    else if(tipo=='configuracion'){

      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=true
      this.metricas = false
    }
  }
}
