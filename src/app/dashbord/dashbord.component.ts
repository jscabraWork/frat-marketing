import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { }
  seguimiento:boolean = false;
  campania:boolean =true;
  bd:boolean = false;
  prospeccion:boolean = false;
  requerimientos:boolean = false;
  informes:boolean = false;
  configuracion:boolean = false;
  
  ngOnInit(): void {
    this.bd =false;
  }
  cambiarEstado(tipo:string){
    if(tipo=='campania'){
        this.campania=true
        this.bd=false
        this.seguimiento=false
        this.prospeccion=false
        this.requerimientos=false
        this.informes=false
        this.configuracion=false
    }
    else if(tipo=='seguimiento'){
      this.campania=false
      this.bd=false
      this.seguimiento=true
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
    }
    else if(tipo=='bd'){
      this.campania=false
      this.bd=true
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
    }
    else if(tipo=='prospeccion'){
      this.campania=false
      this.bd=false
      this.seguimiento=false
      this.prospeccion=true
      this.requerimientos=false
      this.informes=false
      this.configuracion=false
    }
    else if(tipo=='requerimientos'){
      this.campania=false
      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=true
      this.informes=false
      this.configuracion=false
    }
    else if(tipo=='informes'){
      this.campania=false
      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=true
      this.configuracion=false
    }
    else if(tipo=='configuracion'){
      this.campania=false
      this.bd=false
      this.seguimiento=false
      this.prospeccion=false
      this.requerimientos=false
      this.informes=false
      this.configuracion=true
    }
  }
}
