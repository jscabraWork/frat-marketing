import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Industria } from 'src/app/models/industria.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { ParametrosService } from 'src/app/services/data/parametros.service';

@Component({
  selector: 'app-parametros-campania',
  templateUrl: './parametros-campania.component.html',
  styleUrls: ['./parametros-campania.component.css']
})
export class ParametrosCampaniaComponent implements OnInit {

  industria:Industria={
    id:0,
    nombre:""
  };
  categoria:Categoria={
    id:0,
    nombre:""
  };
  tipoContenido:TipoContenido={
    id:0,
    nombre:"",
    alcance:0,
    redSocial:""
  };

  constructor(private servicio:ParametrosService) { }

  ngOnInit(): void {
    this.industria={
      id:0,
      nombre:""
    };
    this.categoria={
      id:0,
      nombre:""
    };
    this.tipoContenido={
      id:0,
      nombre:"",
      alcance:0,
      redSocial:""
    };

  }
  saveIndustria(){
    this.industria.nombre=this.industria.nombre.toUpperCase();
    this.servicio.crearIndustria(this.industria).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
  }
  saveCategoria(){
    this.categoria.nombre=this.categoria.nombre.toUpperCase();
    this.servicio.crearCategoria(this.categoria).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }

  saveTipoContenido(){
 
    this.tipoContenido.nombre=this.tipoContenido.nombre.toUpperCase();
    this.servicio.crearTipoContenido(this.tipoContenido).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )

  }
}
