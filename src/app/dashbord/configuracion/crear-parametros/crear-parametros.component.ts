import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/sector.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { ParametrosService } from 'src/app/services/data/parametros.service';

@Component({
  selector: 'app-crear-parametros',
  templateUrl: './crear-parametros.component.html',
  styleUrls: ['./crear-parametros.component.css']
})
export class CrearParametrosComponent implements OnInit {



 
  sector:Sector
  constructor(private servicio:ParametrosService) { }

  ngOnInit(): void {

 
    
    this.sector={
      id:0,
      nombre:""
    };
  }


  saveSector(){
    this.sector.nombre=this.sector.nombre.toUpperCase();
    this.servicio.crearSector(this.sector).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }

}
