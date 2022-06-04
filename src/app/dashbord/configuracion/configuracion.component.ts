import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  influencer: boolean = false;
  cliente: boolean = false;
  responsable: boolean = false;
  industria: boolean = true;
  parametros: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  cambiarEstado(tipo: string) {
    if (tipo == 'influencer') {
      this.influencer = true;
      this.cliente = false;
      this.responsable = false;
      this.parametros =false
      this.industria =false
    }
    
    else if (tipo == 'cliente') {
      this.influencer = false;
      this.cliente = true;
      this.responsable = false;
      this.parametros =false
      this.industria =false
    }
    
    else if (tipo == 'responsable') {
      this.influencer = false;
      this.cliente = false;
      this.responsable = true;
      this.parametros =false
      this.industria =false
    }
    
    else if (tipo == 'industria') {
      this.influencer = false;
      this.cliente = false;
      this.responsable = false;
      this.parametros =false
      this.industria =true
    } 
    
    else if (tipo == 'parametros') {
      this.influencer = false;
      this.cliente = false;
      this.responsable = false;
      this.parametros =true
      this.industria =false
    }
  }
}
