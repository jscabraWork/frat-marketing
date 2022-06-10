import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-campanias',
  templateUrl: './crear-campanias.component.html',
  styleUrls: ['./crear-campanias.component.css']
})
export class CrearCampaniasComponent implements OnInit {


  limiteInferior:number =0
  limiteSuperior:number=0
  listaEdades:number[]=[]
  constructor() { }

  ngOnInit(): void {

    for(let i=1; i <=70 ; i++){
      this.listaEdades.push(i)
    }
  }



}
