import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.css']
})
export class CampaniaComponent implements OnInit {
  crear:boolean=false
  campanias:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
  cambiarEstado(tipo:string){

    if(tipo=='crear'){
   
     this.crear=true
     this.campanias=false

   }
   else if(tipo=='campanias'){
   
     this.campanias=true
     this.crear=false

   }
 }
}
