import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.css']
})
export class CampaniaComponent implements OnInit {
  crear:boolean=false
  campanias:boolean=false

  perfilamiento:boolean=true
  requerimientos:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  cambiarEstado(tipo:string){

    if(tipo=='crear'){
   
     this.crear=true
     this.campanias=false

      this.perfilamiento=false
      this.requerimientos=false

   }
   else if(tipo=='campanias'){
   
     this.campanias=true
     this.crear=false

     this.perfilamiento=false
     this.requerimientos=false
   }
 
  else if(tipo=='perfilamiento'){
   
    this.campanias=false
    this.crear=false

    this.perfilamiento=true
    this.requerimientos=false
  }
  else if(tipo=='requerimientos'){
   
    this.campanias=false
    this.crear=false
  
    this.perfilamiento=false
    this.requerimientos=true
  }
}
 
}
