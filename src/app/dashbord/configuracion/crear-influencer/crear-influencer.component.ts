import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Genero } from 'src/app/models/genero.model';

import { Influencer } from 'src/app/models/influencer.model';
import { Mascotas } from 'src/app/models/mascota.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';
import { Rango } from 'src/app/models/rangos.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { CiudadesService } from 'src/app/services/data/ciudades.service';
import { GeneroService } from 'src/app/services/data/genero.service';

import { InfluencerService } from 'src/app/services/data/influencer.service';
import { MascotasService } from 'src/app/services/data/mascotas.service';
import { OcupacionService } from 'src/app/services/data/ocupacion.service';
import { RangosService } from 'src/app/services/data/rangos.service';
import { TipoContenidoInfluencerService } from 'src/app/services/data/tipo-contenido-influencer.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';


@Component({
  selector: 'app-crear-influencer',
  templateUrl: './crear-influencer.component.html',
  styleUrls: ['./crear-influencer.component.css']
})
export class CrearInfluencerComponent implements OnInit {

  influencer:Influencer
  ciudadid:number=0
  tipoContenidosElegidos:TipoContenidoInfluencer[]=[]
  gustosElegidos:TipoContenidoInfluencer[]=[]
  
  mascotasElegidos:Mascotas[]=[]
  ocupacionElegidos:Ocupacion[]=[]


  actualContenido:TipoContenidoInfluencer 
  actualGusto:TipoContenidoInfluencer
  

  
  actualMascota:Mascotas
  actualOcupacion:Ocupacion

  ciudades:Ciudad[]=[]
  tipoContenidos:TipoContenidoInfluencer[]=[]
  gustos:TipoContenidoInfluencer[]=[]

  mascotas:Mascotas[]=[]
  ocupaciones:Ocupacion[]=[]


  tipoContenidosCampania:TipoContenido[]=[]
  tipoContenidosCampaniaElegidos:TipoContenido[]=[]
  actualContenidoCampania:TipoContenido 



  generos:Genero[]
  generosElegidos:Genero[]
  actualGenero:Genero 


  rangos:Rango[]
  rangosElegidos:Rango[]
  actualRango:Genero 

  ciudadesElegidos:Ciudad[]=[]
  actualCiudad:Ciudad 


  precios:number[]=[]
  alcances:number[]=[]
  porcentajes:number[]=[]
  porcentajesRangos:number[]=[]

  precioActual:number=0
  alcanceActual:number
  porcentajeActual:number
  porcentajeRangoActual:number

  constructor(
    private servicioCiudades: CiudadesService,
    private servicioTipoContenido: TipoContenidoInfluencerService,

    private servicioOcupacion: OcupacionService,
    private servicioMascota: MascotasService,
    private servicioInfluencer: InfluencerService,
    private servicioTipoContenidoCampania: TipoContenidoService,
    private servicioGenero: GeneroService,
    private rangoService: RangosService

  ) { }

  ngOnInit(): void {
    this.porcentajesRangos=[]
    this.ciudadesElegidos=[]
    this.porcentajeRangoActual=0
    this. actualCiudad ={
      id:0,
      nombre:"",

    }
    this.porcentajeActual=0
    this.influencer= new Influencer();
    this.influencer.igUser ='@'
    this.influencer.genero=""
    this.influencer.hijos=0

    this.influencer.id =0
    this.ciudadid =0
    this.ciudades=[]
    this.tipoContenidos=[]
    this.gustos=[]

    this.mascotas=[]
    this.ocupaciones=[]

    this.tipoContenidosElegidos=[]
    
    this.gustosElegidos=[]
    this.mascotasElegidos=[]
    this.ocupacionElegidos=[]
    this.porcentajes=[]
    this.generos=[]
    this.generosElegidos=[]
    this.actualGenero={
      id:0,
      nombre:''
    }
    this.rangos=[]
    this.rangosElegidos=[]
    this.actualRango={
      id:0,
      nombre:''
    }
    this.tipoContenidosCampania=[]

    this.tipoContenidosCampaniaElegidos=[]
  
    this.actualContenidoCampania ={
      id:0,
      nombre:"",
   
      redSocial:""
    }
  
    this.precios=[]
    this.alcances=[]
  
    this.precioActual=0
    this.alcanceActual=0
    this.actualContenido ={
      id:0,
      nombre:""
    }
    this.actualGusto={
      id:0,
      nombre:""
    }
  
    this.actualMascota={
      id:0,
      nombre:""
    }
    this.actualOcupacion={
      id:0,
      nombre:""
    }
    this.servicioTipoContenido.getAllTipoContenidoInfluencer().subscribe(
      response=>{
        this.gustos=response.tipoContenidos
      }
    )
    this.rangoService.getAllRangos().subscribe(response=>{
      this.rangos=response.rangos
    })

    this.servicioCiudades.getAllCiudades().subscribe(
      response=>{
        this.ciudades=response.ciudades
      }
    )
    this.servicioGenero.getAllGeneros().subscribe(
      response=>{
        this.generos=response.generos
      }
    )
    this.servicioTipoContenido.getAllTipoContenidoInfluencer().subscribe(
      response=>{
        this.tipoContenidos=response.tipoContenidos
      }
    )
  
    this.servicioMascota.getAllMascotas().subscribe(
      response=>{
        this.mascotas=response.mascotas
      }
    )
    this.servicioOcupacion.getAllOcupaciones().subscribe(
      response=>{
        
        this.ocupaciones=response.ocupaciones
      }
    )


    this.servicioTipoContenidoCampania.getAllTipoContenido().subscribe(
      response=>{
        this.tipoContenidosCampania=response.tipoContenidos
      }
    )
  }


  agregarTipoContenido(){

      if(this.actualContenido.id!=0){
  
    for(let i=0;i<this.tipoContenidos.length;i++){
      if(this.tipoContenidos[i].id==this.actualContenido.id){
       this.actualContenido=this.tipoContenidos[i]
      }
    }

    let encontro = false;
    for(let i =0;i<this.tipoContenidosElegidos.length && !encontro;i++){
      if(this.tipoContenidosElegidos[i].id==this.actualContenido.id){
        alert("Este tipo de contenido ya fue agregado al influenceador")
        encontro=true
      }
    }
    if(!encontro){
      this.tipoContenidosElegidos.push(this.actualContenido)
      console.log( this.tipoContenidosElegidos)
    }

    this.actualContenido ={
      id:0,
      nombre:""
    }
  }
  else{
    alert("Seleccione un tipo de contenido")
  }
  }


  agregarCiudad(){

    if(this.actualCiudad.id!=0){

if(this.ciudadesElegidos.length<5){
  for(let i=0;i<this.ciudades.length;i++){
    if(this.ciudades[i].id==this.actualCiudad.id){
     this.actualCiudad=this.ciudades[i]
    }
  }

  let encontro = false;
  for(let i =0;i<this.ciudadesElegidos.length && !encontro;i++){
    if(this.ciudadesElegidos[i].id==this.actualCiudad.id){
      alert("Esta ciudad ya fue agregado al influenceador")
      encontro=true
    }
  }
  if(!encontro){
    this.ciudadesElegidos.push(this.actualCiudad)
    console.log( this.ciudadesElegidos)
  }

  this.actualCiudad ={
    id:0,
    nombre:""
  }
}
else{
  alert("Máximo puede haber 4 ciudades")
}

}
else{
  alert("Selecciona una ciudad")
}
}
  agregarTipoContenidoCampania(){

    if(this.actualContenidoCampania.id!=0 && this.precioActual!=0 && this.alcanceActual>0 && this.alcanceActual<=100){

  for(let i=0;i<this.tipoContenidosCampania.length;i++){
    if(this.tipoContenidosCampania[i].id==this.actualContenidoCampania.id){
     this.actualContenidoCampania=this.tipoContenidosCampania[i]
    }
  }

  let encontro = false;
  for(let i =0;i<this.tipoContenidosCampaniaElegidos.length && !encontro;i++){
    if(this.tipoContenidosCampaniaElegidos[i].id==this.actualContenidoCampania.id){
      alert("Este tipo de contenido ya fue agregado al influenceador")
      encontro=true
    }
  }
  if(!encontro){
    this.tipoContenidosCampaniaElegidos.push(this.actualContenidoCampania)
    this.precios.push(this.precioActual);
    this.alcances.push(this.alcanceActual)
  }

  this.actualContenidoCampania ={
    id:0,
    nombre:"",
  
    redSocial:""
  }
  this.precioActual=0
  this.alcanceActual=0
}
else{
  alert("Seleccione un tipo de contenido con su respectivo precio y alcance")
}
}




agregarGenero(){

if(this.actualGenero.id!=0 && this.porcentajeActual>0 && this.porcentajeActual<=100){

        for(let i=0;i<this.generos.length;i++){
          if(this.generos[i].id==this.actualGenero.id){
          this.actualGenero=this.generos[i]
          }
        }

        let encontro = false;

        for(let i =0;i<this.generosElegidos.length && !encontro;i++){
          if(this.generosElegidos[i].id==this.actualGenero.id){
            alert("Este genero ya fue agregado al influenceador")
            encontro=true
          }
        }
        if(!encontro){
          this.generosElegidos.push(this.actualGenero)
          this.porcentajes.push(this.porcentajeActual);
     
        }

        this.actualGenero ={
          id:0,
          nombre:"",
        }
        this.porcentajeActual=0
        
        }
        else{
        alert("Seleccione un tipo de contenido con su respectivo precio y alcance")
        }
}





agregarRango(){

  if(this.actualRango.id!=0 && this.porcentajeRangoActual>0 && this.porcentajeRangoActual<=100){
  
          for(let i=0;i<this.rangos.length;i++){
            if(this.rangos[i].id==this.actualRango.id){
            this.actualRango=this.rangos[i]
            }
          }
  
          let encontro = false;
  
          for(let i =0;i<this.rangosElegidos.length && !encontro;i++){
            if(this.rangosElegidos[i].id==this.actualRango.id){
              alert("Este rango ya fue agregado al influenceador")
              encontro=true
            }
          }
          if(!encontro){
            this.rangosElegidos.push(this.actualRango)
            this.porcentajesRangos.push(this.porcentajeRangoActual);
       
          }
  
          this.actualRango ={
            id:0,
            nombre:"",
          }
          this.porcentajeRangoActual=0
          
          }
          else{
          alert("Seleccione un tipo de contenido con su respectivo precio y alcance")
          }
  }
  

  agregarGusto(){
    
    if(this.actualGusto.id!=0){
    for(let i=0;i<this.gustos.length;i++){
      if(this.gustos[i].id==this.actualGusto.id){
       this.actualGusto=this.gustos[i]
      }
    }

    let encontro = false;
    for(let i =0;i<this.gustosElegidos.length && !encontro;i++){
      if(this.gustosElegidos[i].id==this.actualGusto.id){
        alert("Este gusto ya fue agregado al influenceador")
        encontro=true
      }
    }
    if(!encontro){
      this.gustosElegidos.push(this.actualGusto)
    }

    this.actualGusto ={
      id:0,
      nombre:""
    }
  }
  else{
    alert("Seleccione un gusto")
  }
}

  agregarMascota(){

    if(this.actualMascota.id!=0){
    for(let i=0;i<this.mascotas.length;i++){
      if(this.mascotas[i].id==this.actualMascota.id){
       this.actualMascota=this.mascotas[i]
      }
    }

    let encontro = false;
    for(let i =0;i<this.mascotasElegidos.length && !encontro;i++){
      if(this.mascotasElegidos[i].id==this.actualMascota.id){
        alert("Esa mascota ya fue agregada al influenceador")
        encontro=true
      }
    }
    if(!encontro){
      this.mascotasElegidos.push(this.actualMascota)
    }

    this.actualMascota ={
      id:0,
      nombre:""
    }
  }
  else{
    alert("Seleccione una mascota")
  }

  }
  agregarOcupacion(){

    if(this.actualOcupacion.id!=0){
    for(let i=0;i<this.ocupaciones.length;i++){
      if(this.ocupaciones[i].id==this.actualOcupacion.id){
       this.actualOcupacion=this.ocupaciones[i]
      }
    }


    let encontro = false; 
    for(let i =0;i<this.ocupacionElegidos.length && !encontro;i++){
      if(this.ocupacionElegidos[i].id==this.actualOcupacion.id){
        alert("Esta ocupacion ya fue agregada al influenceador")
        encontro=true
      }
    }
    if(!encontro){
      this.ocupacionElegidos.push(this.actualOcupacion)
    }

    this.actualOcupacion ={
      id:0,
      nombre:""
    }
  }
  else{
    alert("Seleccione una ocupacion")
  }
  }

  eliminarCiudad(id:number){
    for(let i=0;i<this.ciudadesElegidos.length;i++){
      if(this.ciudadesElegidos[i].id==id){
        this.ciudadesElegidos.splice(i,1)
      }
    }
  }

  eliminarTipoContenido(id:number){
    for(let i=0;i<this.tipoContenidosElegidos.length;i++){
      if(this.tipoContenidosElegidos[i].id==id){
        this.tipoContenidosElegidos.splice(i,1)
      }
    }
  }

  

  eliminarTipoContenidoCampania(id:number){
    for(let i=0;i<this.tipoContenidosCampaniaElegidos.length;i++){
      if(this.tipoContenidosCampaniaElegidos[i].id==id){
        this.tipoContenidosCampaniaElegidos.splice(i,1)
        this.precios.splice(i,1)
        this.alcances.splice(i,1)
      }
    }
  }


  eliminarGenero(id:number){
    for(let i=0;i<this.generosElegidos.length;i++){
      if(this.generosElegidos[i].id==id){
        this.generosElegidos.splice(i,1)
        this.porcentajes.splice(i,1)
        
      }
    }
  }

  eliminarRango(id:number){
    for(let i=0;i<this.rangosElegidos.length;i++){

      if(this.rangosElegidos[i].id==id){
        this.rangosElegidos.splice(i,1)
        this.porcentajesRangos.splice(i,1)
        
      }
    }
  }

  eliminarGusto(id:number){
    for(let i=0;i<this.gustosElegidos.length;i++){
      if(this.gustosElegidos[i].id==id){
        this.gustosElegidos.splice(i,1)
      }
    }
  }

  eliminarMascota(id:number){
    for(let i=0;i<this.mascotasElegidos.length;i++){
      if(this.mascotasElegidos[i].id==id){
        this.mascotasElegidos.splice(i,1)
      }
    }
  }
  eliminarOcupacion(id:number){
    for(let i=0;i<this.ocupacionElegidos.length;i++){
      if(this.ocupacionElegidos[i].id==id){
        this.ocupacionElegidos.splice(i,1)
      }
    }
  }

  guardarInfluencer(){
   // mascotas:string,ocupaciones:string,gustos:string,disgustos:string,tipoContenido:string
    let mascotas:string="";
    for(let i=0; i < this.mascotasElegidos.length;i++){
      mascotas += this.mascotasElegidos[i].id + '_'
    }
    mascotas += '-1'

    let ocupaciones:string="";
    for(let i=0; i < this.ocupacionElegidos.length;i++){
      ocupaciones += this.ocupacionElegidos[i].id + '_'
    }
    ocupaciones += '-1'

    let gustos:string="";
    for(let i=0; i < this.gustosElegidos.length;i++){
      gustos += this.gustosElegidos[i].id + '_'
    }
    gustos += '-1'



    let tipoContenido:string="";
    for(let i=0; i < this.tipoContenidosElegidos.length;i++){
      tipoContenido += this.tipoContenidosElegidos[i].id + '_'
    }
    tipoContenido += '-1'

    let tipoContenidoCampania:string="";
    for(let i=0; i < this.tipoContenidosCampaniaElegidos.length;i++){
      tipoContenidoCampania += this.tipoContenidosCampaniaElegidos[i].id + '_'
    }
    tipoContenidoCampania += '-1'

    let precios:string="";
  

    for(let i=0; i < this.precios.length;i++){
      precios += this.precios[i] + '_'
    }
    precios += '-1'

    let alcances:string=""
    for(let i=0;i<this.alcances.length;i++){
      alcances += this.alcances[i] +'_'
    }
    alcances +='-1'

    let ciudades:string="";
    for(let i=0;i<this.ciudadesElegidos.length;i++){
      ciudades += this.ciudadesElegidos[i].id +'_'
    }
    ciudades +='-1'

    let generos:string="";
    for(let i=0;i<this.generosElegidos.length;i++){
      generos +=this.generosElegidos[i].id +'_'
    }
    generos+= '-1'

    let porcentajes:string="";
    for(let i=0;i<this.porcentajes.length;i++){
      porcentajes +=this.porcentajes[i] +'_'
    }
    porcentajes+= '-1'


    let rangos:string="";
    for(let i=0;i<this.rangos.length;i++){
      rangos +=this.rangos[i].id +'_'
    }
    rangos+= '-1'

    let porcentajesRangos:string="";
    for(let i=0;i<this.porcentajesRangos.length;i++){
      porcentajesRangos +=this.porcentajesRangos[i] +'_'
    }
    porcentajesRangos+= '-1'

    this.influencer.nombre = this.influencer.nombre.toUpperCase();

    this.servicioInfluencer.crearInfluencer(this.influencer,ciudades,mascotas,ocupaciones,gustos,tipoContenido,tipoContenidoCampania,precios,alcances,this.ciudadid,generos,porcentajes,rangos, porcentajesRangos).subscribe(
      response=>{
        alert(response.mensaje)
        this.ngOnInit()
      },
    error=>{
      alert(error.error.mensaje)
    }
    )
  }
}
