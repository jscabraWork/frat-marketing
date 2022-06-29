import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Gusto } from 'src/app/models/gusto.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Mascotas } from 'src/app/models/mascota.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { CiudadesService } from 'src/app/services/data/ciudades.service';
import { GustosService } from 'src/app/services/data/gustos.service';
import { InfluencerService } from 'src/app/services/data/influencer.service';
import { MascotasService } from 'src/app/services/data/mascotas.service';
import { OcupacionService } from 'src/app/services/data/ocupacion.service';
import { TipoContenidoInfluencerService } from 'src/app/services/data/tipo-contenido-influencer.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';


@Component({
  selector: 'app-crear-influencer',
  templateUrl: './crear-influencer.component.html',
  styleUrls: ['./crear-influencer.component.css']
})
export class CrearInfluencerComponent implements OnInit {

  influencer:Influencer={
    id:0,
    nombre:"",
    correo:"",
    password:"",
    celular:"",
    fechaNacimiento:new Date(),
    genero:"",
    hijos:0,
    
    direccion:"",
    igUser:"",
    tikTokUser:"",
    seguidoresInstagram:0,
    seguidoresTikTok:0,
    edadInstagram:"",
    edadTikTok:"",
    ciudadInstagram:"",
    ciudadTikTok:"",
    generoInstagram:"",
    generoTikTok:"",
 
    
  };
  ciudadid:number=0
  tipoContenidosElegidos:TipoContenidoInfluencer[]=[]
  gustosElegidos:Gusto[]=[]
  disgustosElegidos:Gusto[]=[]
  mascotasElegidos:Mascotas[]=[]
  ocupacionElegidos:Ocupacion[]=[]


  actualContenido:TipoContenidoInfluencer ={
    id:0,
    nombre:""
  }
  actualGusto:Gusto={
    id:0,
    nombre:""
  }
  actualDisgusto:Gusto={
    id:0,
    nombre:""
  }
  actualMascota:Mascotas={
    id:0,
    nombre:""
  }
  actualOcupacion:Ocupacion={
    id:0,
    nombre:""
  }

  ciudades:Ciudad[]=[]
  tipoContenidos:TipoContenidoInfluencer[]=[]
  gustos:Gusto[]=[]
  listaEdades:string[]=[]
  mascotas:Mascotas[]=[]
  ocupaciones:Ocupacion[]=[]


  tipoContenidosCampania:TipoContenido[]=[]

  tipoContenidosCampaniaElegidos:TipoContenido[]=[]

  actualContenidoCampania:TipoContenido ={
    id:0,
    nombre:"",
    alcance:0,
    redSocial:""
  }

  precios:number[]=[]

  precioActual:number=0
  constructor(
    private servicioCiudades: CiudadesService,
    private servicioTipoContenido: TipoContenidoInfluencerService,
    private servicioGustos: GustosService,
    private servicioOcupacion: OcupacionService,
    private servicioMascota: MascotasService,
    private servicioInfluencer: InfluencerService,
    private servicioTipoContenidoCampania: TipoContenidoService,

  ) { }

  ngOnInit(): void {
    this.influencer={
      id:0,
      nombre:"",
      correo:"",
      password:"",
      celular:"",
      fechaNacimiento:null,
      genero:"",
      hijos:0,
      
      direccion:"",
      igUser:"",
      tikTokUser:"",
      seguidoresInstagram:0,
      seguidoresTikTok:0,
      edadInstagram:"",
      edadTikTok:"",
      ciudadInstagram:"",
      ciudadTikTok:"",
      generoInstagram:"",
      generoTikTok:"",

    }
    this.ciudadid =0
    this.ciudades=[]
    this.tipoContenidos=[]
    this.gustos=[]

    this.mascotas=[]
    this.ocupaciones=[]

    this.tipoContenidosElegidos=[]
    this.disgustosElegidos=[]
    this.gustosElegidos=[]
    this.mascotasElegidos=[]
    this.ocupacionElegidos=[]


    this.tipoContenidosCampania=[]

    this.tipoContenidosCampaniaElegidos=[]
  
    this.actualContenidoCampania ={
      id:0,
      nombre:"",
      alcance:0,
      redSocial:""
    }
  
    this.precios=[]
  
    this.precioActual=0

    this.actualContenido ={
      id:0,
      nombre:""
    }
    this.actualGusto={
      id:0,
      nombre:""
    }
    this.actualDisgusto={
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
    for(let i=1; i <=70 ; i++){
      this.listaEdades.push(i.toString())
    }
    this.servicioCiudades.getAllCiudades().subscribe(
      response=>{
        this.ciudades=response.ciudades
      }
    )
    this.servicioTipoContenido.getAllTipoContenidoInfluencer().subscribe(
      response=>{
        this.tipoContenidos=response.tipoContenidos
      }
    )
    this.servicioGustos.getAllGustos().subscribe(
      response=>{
        this.gustos=response.gustos
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



  agregarTipoContenidoCampania(){

    if(this.actualContenidoCampania.id!=0 && this.precioActual!=0){

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
  }

  this.actualContenidoCampania ={
    id:0,
    nombre:"",
    alcance:0,
    redSocial:""
  }
  this.precioActual=0
}
else{
  alert("Seleccione un tipo de contenido con su respectivo precio")
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
  agregarDisgusto(){

    if(this.actualDisgusto.id!=0){
    for(let i=0;i<this.gustos.length;i++){
      if(this.gustos[i].id==this.actualDisgusto.id){
       this.actualDisgusto=this.gustos[i]
      }
    }
    console.log(this.actualDisgusto)

    let encontro = false;
    for(let i =0;i<this.disgustosElegidos.length && !encontro;i++){
      if(this.disgustosElegidos[i].id==this.actualDisgusto.id){
        alert("Este disgusto ya fue agregado al influenceador")
        encontro=true
      }
    }
    if(!encontro){
      this.disgustosElegidos.push(this.actualDisgusto)
    }

    this.actualDisgusto ={
      id:0,
      nombre:""
    }
  }
  else{
    alert("Seleccione un disgusto")
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
  eliminarDisgusto(id:number){
    for(let i=0;i<this.disgustosElegidos.length;i++){
      if(this.disgustosElegidos[i].id==id){
        this.disgustosElegidos.splice(i,1)
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

    let disgustos:string="";
    for(let i=0; i < this.disgustosElegidos.length;i++){
      disgustos += this.disgustosElegidos[i].id + '_'
    }
    disgustos += '-1'

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

    this.servicioInfluencer.crearInfluencer(this.influencer,this.ciudadid,mascotas,ocupaciones,gustos,disgustos,tipoContenido,tipoContenidoCampania,precios).subscribe(
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
