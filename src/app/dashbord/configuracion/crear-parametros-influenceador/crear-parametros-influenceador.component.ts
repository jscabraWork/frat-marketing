import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Gusto } from 'src/app/models/gusto.model';
import { Mascotas } from 'src/app/models/mascota.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';
import { ParametrosService } from 'src/app/services/data/parametros.service';

@Component({
  selector: 'app-crear-parametros-influenceador',
  templateUrl: './crear-parametros-influenceador.component.html',
  styleUrls: ['./crear-parametros-influenceador.component.css']
})
export class CrearParametrosInfluenceadorComponent implements OnInit {

  constructor(private servicio:ParametrosService) { }
  ciudad:Ciudad ={
    id:0,
    nombre:""
  };
  mascota:Mascotas ={
    id:0,
    nombre:""
  };
  ocupacion:Ocupacion ={
    id:0,
    nombre:""
  };
  gusto:Gusto ={
    id:0,
    nombre:""
  };
  ngOnInit(): void {
  }

  saveCiudad(){
    this.ciudad.nombre=this.ciudad.nombre.toUpperCase();
    this.servicio.crearCiudad(this.ciudad).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }

  saveMascota(){
    this.mascota.nombre=this.mascota.nombre.toUpperCase();
    this.servicio.crearMascota(this.mascota).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }

  saveOcupacion(){
    this.ocupacion.nombre=this.ocupacion.nombre.toUpperCase();
    this.servicio.crearOcupacion(this.ocupacion).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }

  saveGusto(){
    this.gusto.nombre=this.gusto.nombre.toUpperCase();
    this.servicio.crearGusto(this.gusto).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }
}
