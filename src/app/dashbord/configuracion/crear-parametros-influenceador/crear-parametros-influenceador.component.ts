import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Genero } from 'src/app/models/genero.model';

import { Mascotas } from 'src/app/models/mascota.model';
import { Metrica } from 'src/app/models/metrica.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';
import { Rango } from 'src/app/models/rangos.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { MetricaService } from 'src/app/services/data/metrica.service';
import { ParametrosService } from 'src/app/services/data/parametros.service';

@Component({
  selector: 'app-crear-parametros-influenceador',
  templateUrl: './crear-parametros-influenceador.component.html',
  styleUrls: ['./crear-parametros-influenceador.component.css']
})
export class CrearParametrosInfluenceadorComponent implements OnInit {

  constructor(
    private servicio:ParametrosService,
    private servicioMetrica:MetricaService
    ) { }
  ciudad:Ciudad 
  mascota:Mascotas 
  ocupacion:Ocupacion 

  tipoContenido:TipoContenidoInfluencer
  genero:Genero
  rango:Rango
  tipoContenidoC:TipoContenido
  metrica:Metrica
  metricas:Metrica[]
  metricasElegidas:Metrica[]
  metricaActual:Metrica
  ngOnInit(): void {
    this.metrica = new Metrica()
    this.metricas=[]
    this.metricaActual = new Metrica()
    this.metricaActual.id=0 
    this.metricasElegidas=[]
    this.tipoContenidoC={
      id:0,
      nombre:"",
   
      redSocial:""
    };
    this.ciudad ={
      id:0,
      nombre:""
    };
    this.genero ={
      id:0,
      nombre:""
    };
    this.mascota ={
      id:0,
      nombre:""
    };
    this.rango={
      id:0,
      nombre:""
    }
    this.ocupacion ={
      id:0,
      nombre:""
    };

    this.tipoContenido ={
      id:0,
      nombre:""
    };
  this.servicioMetrica.getAllMetricas().subscribe(response=>{
    this.metricas = response.metricas
  })
  }


  agregarMetrica(){

    if(this.metricaActual.id!=0){

  for(let i=0;i<this.metricas.length;i++){
    if(this.metricas[i].id==this.metricaActual.id){
     this.metricaActual=this.metricas[i]
    }
  }

  let encontro = false;
  for(let i =0;i<this.metricasElegidas.length && !encontro;i++){
    if(this.metricasElegidas[i].id==this.metricaActual.id){
      alert("Este tipo de contenido ya fue agregado al influenceador")
      encontro=true
    }
  }
  if(!encontro){
    this.metricasElegidas.push(this.metricaActual)
 
  }

  this.metricaActual ={
    id:0,
    nombre:""
  }
}
else{
  alert("Seleccione una metrica")
}
}
eliminarMetrica(id:number){
  for(let i=0;i<this.metricasElegidas.length;i++){
    if(this.metricasElegidas[i].id==id){
      this.metricasElegidas.splice(i,1)
    }
  }
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
  saveRango(){
    this.rango.nombre=this.rango.nombre.toUpperCase();
    this.servicio.crearRango(this.rango).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }


  saveGenero(){
    this.genero.nombre=this.genero.nombre.toUpperCase();
    this.servicio.crearGenero(this.genero).subscribe(response=>{
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
  saveMetrica(){
    this.metrica.nombre=this.metrica.nombre.toUpperCase();
    this.servicio.crearMetrica(this.metrica).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }

  saveTipoContenidoC(){
    console.log("A")
    let metricas= ""
    for(let i=0;i<this.metricasElegidas.length;i++){
      metricas+= this.metricasElegidas[i].id+'_'
    }
    metricas +='-1';
    this.tipoContenidoC.nombre=this.tipoContenidoC.nombre.toUpperCase();
    this.servicio.crearTipoContenido(this.tipoContenidoC,metricas).subscribe(response=>{
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

    this.servicio.crearTipoContenidoInfluencer(this.tipoContenido).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
    
  }
}
