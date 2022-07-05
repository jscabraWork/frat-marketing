import { Component, OnInit } from '@angular/core';
import { Campania } from 'src/app/models/campania.model';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { SeguimientoService } from 'src/app/services/data/seguimiento.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  campanias:Campania[]=[]
  tareasTerminadas:number=0
  tareasNoTerminadas:number=0
  porcentajes:number[]=[]
  constructor( private servicioSeguimiento: SeguimientoService) { }

  ngOnInit(): void {
    this.campanias =[]
    this.servicioSeguimiento.getSeguimiento().subscribe(
      (response) => {
        this.campanias = response.campanias
        this.tareasNoTerminadas = response.tareasNoTerminadas
        this.tareasTerminadas= response.tareasTerminadas
        this.porcentajes = response.porcentajes
        console.log(response)
      })
  }


}
