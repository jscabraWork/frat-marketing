import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {

  dashbord:boolean
  campanias:boolean
  constructor() { }

  ngOnInit(): void {
    this.dashbord=true
    this.campanias=false
  }
  cambiarEstado(tipo:string){

    if(tipo=='dashbord'){
   
     this.dashbord=true
     this.campanias=false
   
  

   }
   else if(tipo=='campanias'){
   
     this.campanias=true
     this.dashbord=false

   }

  }
}
