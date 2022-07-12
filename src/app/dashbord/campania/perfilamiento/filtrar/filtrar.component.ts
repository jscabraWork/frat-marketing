import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Genero } from 'src/app/models/genero.model';
import { Gusto } from 'src/app/models/gusto.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Rango } from 'src/app/models/rangos.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { CiudadesService } from 'src/app/services/data/ciudades.service';
import { FiltroInstagramService } from 'src/app/services/data/filtro-instagram.service';
import { FiltroTikTokService } from 'src/app/services/data/filtro-tik-tok.service';
import { GeneroService } from 'src/app/services/data/genero.service';
import { GustosService } from 'src/app/services/data/gustos.service';
import { RangosService } from 'src/app/services/data/rangos.service';
import { TipoContenidoInfluencerService } from 'src/app/services/data/tipo-contenido-influencer.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';
import { PerfilamientoComponent } from '../perfilamiento.component';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {


  nombre:string
  booleanNombre:boolean
  ciudadseguidores:string=""
  ciudadInfluencer:string=""

  ciudades:Ciudad[]=[]

  redSocial:string=""
  generos:Genero[]

  limiteInferiorInfluencer:number =0
  limiteSuperiorInfluencer:number=0  
  listaEdades:number[]=[]
  generoInfluencer:string=""
  generoSeguidores:number

  tipoContenidos:TipoContenidoInfluencer[]=[]
  contenidoNombre:string=""


  gustos:Gusto[]=[]

  actualGusto:string=""

  minimoP:number=0
  maximoP:number=0

  minimoS:number=0
  maximoS:number=0
  rangos:Rango[]
  idRango:number
  porcentajeMinimo:number
  porcentajeGenero:number
  influencers:Influencer[]=[]
  constructor(
    public dialogRef: MatDialogRef<PerfilamientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioTipoContenido: TipoContenidoInfluencerService,
    private servicioCiudades: CiudadesService,
    private servicioGustos: GustosService,
    private filtroInstagramService:FiltroInstagramService,
    private filtroTikTokService:FiltroTikTokService,
    private rangoService: RangosService,
    private servicioGenero: GeneroService,
    ) { }

  ngOnInit(): void {
    this.nombre=null
    this.booleanNombre=false
    this.porcentajeGenero=0
    this.generoSeguidores=0
    this.porcentajeMinimo=0
    this.idRango=0
    this.rangos=[]
    this.tipoContenidos=[]
    this.redSocial =  this.data.red

    this.ciudadseguidores=""
    this.ciudadInfluencer=""
    this. actualGusto=""

  this.ciudades=[]
  for(let i=1; i <=100 ; i++){
    this.listaEdades.push(i)
  }
  this.servicioGenero.getAllGeneros().subscribe(
    response=>{
      this.generos=response.generos
    }
  )

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
     
    this.rangoService.getAllRangos().subscribe(response=>{
      this.rangos=response.rangos
    })
  }
  cambiarFiltro(){
    this.booleanNombre=!this.booleanNombre
  }

  filtrar(){

    if(this.redSocial=="Instagram" && this.booleanNombre){
      if(this.nombre!=''){

        this.nombre = this.nombre.toUpperCase();
        this.filtroInstagramService.buscarPorNombre(this.nombre).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
     
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
           }
       
        }
        )
      }
    }
    else if(this.redSocial=="Instagram" && !this.booleanNombre){

      if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0 && this.ciudadInfluencer!=''&& this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&&this.idRango!=0&& this.porcentajeMinimo!=0 && this.generoInfluencer!='' && this.generoSeguidores!=0 && this.porcentajeGenero!=0){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax, fechaMin,this.idRango, this.porcentajeMinimo,this.generoInfluencer,this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
     
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
           }
       
        }
        )
      }

     else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0 && this.ciudadInfluencer!=''&& this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&&this.idRango!=0&& this.porcentajeMinimo!=0 && this.generoInfluencer!=''){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax, fechaMin,this.idRango, this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          
          if(this.influencers.length==0){
     
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
           }
       
        }
        )
      }

 

      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0&&this.ciudadInfluencer!=''&&this.ciudadseguidores!=''&&this.limiteInferiorInfluencer!=0&&this.limiteSuperiorInfluencer!=0&& this.idRango!=0&&this.porcentajeMinimo!=0 && this.generoInfluencer!=''&& this.generoSeguidores!=0&&this.porcentajeGenero!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo,this.generoInfluencer,this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0&&this.ciudadInfluencer!=''&&this.ciudadseguidores!=''&&this.limiteInferiorInfluencer!=0&&this.limiteSuperiorInfluencer!=0&& this.idRango!=0&&this.porcentajeMinimo!=0 && this.generoInfluencer!=''){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0 && this.ciudadInfluencer!=''&& this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&&this.idRango!=0&& this.porcentajeMinimo!=0){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax, fechaMin,this.idRango, this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
    
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0 &&this.ciudadInfluencer!=''&&this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0 && this.idRango!=0 && this.porcentajeMinimo!=0 && this.generoInfluencer!=''&&this.generoSeguidores&&this.porcentajeGenero){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS,this.maximoP,this.minimoP,this.ciudadInfluencer, this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0&&this.ciudadInfluencer!=''&&this.ciudadseguidores!=''&&this.limiteInferiorInfluencer!=0&&this.limiteSuperiorInfluencer!=0&& this.idRango!=0&&this.porcentajeMinimo!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0 &&this.ciudadInfluencer!=''&&this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0 && this.idRango!=0 && this.porcentajeMinimo!=0 && this.generoInfluencer!=''){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS,this.maximoP,this.minimoP,this.ciudadInfluencer, this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }


      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadInfluencer!=''&&this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&&this.idRango!=0&&this.porcentajeMinimo!=0&&this.generoInfluencer!=''&& this.generoSeguidores!=0&& this.porcentajeGenero!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoreYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(this.maximoS, this.minimoS,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo,this.generoInfluencer, this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0 && this.ciudadInfluencer!=''&& this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax, fechaMin).subscribe(response=>{
          this.influencers=response.influencers
      
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0 && this.ciudadInfluencer!=''&& this.ciudadseguidores!=''){
        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidores(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores).subscribe(response=>{
      
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadInfluencer!=''&&this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&& this.idRango!=0&&this.porcentajeMinimo!=0&&this.generoInfluencer!=''){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
 

      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0 &&this.ciudadInfluencer!=''&&this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0 && this.idRango!=0 && this.porcentajeMinimo!=0){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(this.maximoS, this.minimoS,this.maximoP,this.minimoP,this.ciudadInfluencer, this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&& this.idRango!=0 && this.porcentajeMinimo!=0&& this.generoInfluencer!=''&& this.generoSeguidores!=0 && this.porcentajeGenero!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoreyCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(this.maximoS, this.minimoS, this.ciudadseguidores,fechaMax,fechaMin,this.idRango, this.porcentajeMinimo,this.generoInfluencer,this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0&&this.ciudadInfluencer!=''&&this.ciudadseguidores!=''&&this.limiteInferiorInfluencer!=0&&this.limiteSuperiorInfluencer!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0&&this.ciudadInfluencer!=''&&this.ciudadseguidores!=''){
        this.filtroInstagramService.buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidores(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer,this.ciudadseguidores).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadInfluencer!=''&&this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&& this.idRango!=0&&this.porcentajeMinimo!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(this.maximoS, this.minimoS,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin,this.idRango,this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0 &&this.ciudadInfluencer!=''&&this.ciudadseguidores!='' && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(this.maximoS, this.minimoS,this.maximoP,this.minimoP,this.ciudadInfluencer, this.ciudadseguidores,fechaMax,fechaMin).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }


      else if(this.minimoS!=0 && this.maximoS!=0 && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0 && this.idRango && this.porcentajeMinimo && this.generoInfluencer!=''&& this.generoSeguidores!=0 && this.porcentajeGenero){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoreYEdadInfluencerYRangoYGeneroYGeneroSeguidores(this.maximoS, this.minimoS,fechaMax,fechaMin, this.idRango, this.porcentajeMinimo,this.generoInfluencer,this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&& this.idRango!=0 && this.porcentajeMinimo!=0&& this.generoInfluencer!=''){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresyCiudadSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS, this.ciudadseguidores,fechaMax,fechaMin,this.idRango, this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0 && this.ciudadInfluencer!=''){
        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidencia(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer).subscribe(response=>{
          this.influencers=response.influencers
    
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!='' && this.minimoP!=0 && this.maximoP!=0){
        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGustoYPrecios(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto,this.maximoP,this.minimoP).subscribe(response=>{
          this.influencers=response.influencers
      
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0&&this.ciudadInfluencer!=''){
        this.filtroInstagramService.buscarPorSeguidoresYGustoYPreciosYCiudadResidencia(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP,this.ciudadInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0 &&this.ciudadInfluencer!=''&&this.ciudadseguidores!=''){
        console.log("AAA")
        this.filtroInstagramService.buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidores(this.maximoS, this.minimoS,this.maximoP,this.minimoP,this.ciudadInfluencer, this.ciudadseguidores).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadInfluencer!=''&&this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(this.maximoS, this.minimoS,this.ciudadInfluencer,this.ciudadseguidores,fechaMax,fechaMin).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      

      else if(this.minimoS!=0 && this.maximoS!=0 && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0 && this.idRango && this.porcentajeMinimo && this.generoInfluencer!=''){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresYEdadInfluencerYRangoYGenero(this.maximoS, this.minimoS,fechaMax,fechaMin, this.idRango, this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.idRango!=0&&this.porcentajeMinimo!=0 &&this.generoInfluencer!=''&&this.generoSeguidores!=0&&this.porcentajeGenero!=0){
        this.filtroInstagramService.buscarPorSeguidoreYRangoYGeneroYGeneroSeguidores(this.maximoS, this.minimoS,this.idRango,this.porcentajeMinimo,this.generoInfluencer,this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0&& this.idRango!=0 && this.porcentajeMinimo!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresyCiudadSeguidoresYEdadInfluencerYRango(this.maximoS, this.minimoS, this.ciudadseguidores,fechaMax,fechaMin,this.idRango, this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0 &&this.ciudadInfluencer!=''){
        this.filtroInstagramService.buscarPorSeguidoresYPreciosYCiudadResidencia(this.maximoS, this.minimoS,this.maximoP,this.minimoP,this.ciudadInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""&& this.actualGusto!=''){
        this.filtroInstagramService.buscarPorSeguidoresYCatgoriaYGusto(this.maximoS, this.minimoS,this.contenidoNombre, this.actualGusto).subscribe(response=>{
          this.influencers=response.influencers

          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

 
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadseguidores!='' &&this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0){
        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())
        this.filtroInstagramService.buscarPorSeguidoresyCiudadSeguidoresYEdadInfluencer(this.maximoS, this.minimoS, this.ciudadseguidores,fechaMax,fechaMin).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''&& this.minimoP!=0 && this.maximoP!=0){
        this.filtroInstagramService.buscarPorSeguidoreYGustoYPrecios(this.maximoS, this.minimoS,this.actualGusto,this.maximoP,this.minimoP).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.generoInfluencer!=''&& this.generoSeguidores!=0&&this.porcentajeGenero!=0){
        this.filtroInstagramService.buscarPorSeguidoreYGeneroYGeneroSeguidores(this.maximoS, this.minimoS,this.generoInfluencer,this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0 && this.idRango && this.porcentajeMinimo){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresyYEdadInfluencerYRango(this.maximoS, this.minimoS,fechaMax,fechaMin, this.idRango, this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.idRango!=0&&this.porcentajeMinimo!=0 &&this.generoInfluencer!=''){
        this.filtroInstagramService.buscarPorSeguidoresYRangoYGenero(this.maximoS, this.minimoS,this.idRango,this.porcentajeMinimo,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadInfluencer!=''&&this.ciudadseguidores!=''){
        this.filtroInstagramService.buscarPorSeguidoresYCiudadResidenciayCiudadSeguidores(this.maximoS, this.minimoS,this.ciudadInfluencer,this.ciudadseguidores).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
   
      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadInfluencer!=''){
        this.filtroInstagramService.buscarPorSeguidoresYCiudadResidencia(this.maximoS, this.minimoS,this.ciudadInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.generoInfluencer!=''){
        this.filtroInstagramService.buscarPorSeguidoresYGenero(this.maximoS, this.minimoS,this.generoInfluencer).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.limiteInferiorInfluencer!=0 && this.limiteSuperiorInfluencer!=0){

        let fechaMaxS = new Date();
        
        fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteInferiorInfluencer-1)
        let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())

        let fechaMinS = new Date();
        fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteSuperiorInfluencer-1)
        let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

        this.filtroInstagramService.buscarPorSeguidoresYEdadInfluencer(this.maximoS, this.minimoS,fechaMax,fechaMin).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.contenidoNombre!=""){
    
        this.filtroInstagramService.buscarPorSeguidoresYCatgoria(this.maximoS, this.minimoS,this.contenidoNombre).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
      else if(this.minimoS!=0 && this.maximoS!=0 && this.actualGusto!=''){
        this.filtroInstagramService.buscarPorSeguidoresYGusto(this.maximoS, this.minimoS,this.actualGusto).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.generoSeguidores!=0 &&this.porcentajeGenero!=0){
        console.log("ACA")
        this.filtroInstagramService.buscarPorSeguidoreYGeneroSeguidores(this.maximoS, this.minimoS, this.generoSeguidores,this.porcentajeGenero).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.ciudadseguidores!=''){
        console.log("ACA")
        this.filtroInstagramService.buscarPorSeguidoresCiudadSeguidores(this.maximoS, this.minimoS, this.ciudadseguidores).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.idRango!=0&&this.porcentajeMinimo!=0){
        this.filtroInstagramService.buscarPorSeguidoresYRango(this.maximoS, this.minimoS,this.idRango,this.porcentajeMinimo).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }

      else if(this.minimoS!=0 && this.maximoS!=0 && this.maximoP!=0&&this.minimoP!=0){
        this.filtroInstagramService.buscarPorSeguidoreYPrecios(this.maximoS, this.minimoS,this.maximoP,this.minimoP).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
     else if(this.minimoS!=0 && this.maximoS!=0){
        this.filtroInstagramService.buscarPorSeguidores(this.maximoS, this.minimoS).subscribe(response=>{
          this.influencers=response.influencers
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          else{
          this.dialogRef.close(response); 
        }
       
        }
        )
      }
    
      else if(this.minimoS==0 || this.maximoS==0){
        alert("La cantidad de seguidores minima y maxima deben ser diferentes de 0")
      }

      
    }
  //   else if(this.redSocial=="TikTok"){

  //     let fechaMaxS = new Date();
  //     fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteSuperiorSeguidores)
  //     let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())
  //     let fechaMinS = new Date();
  //     fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteInferiorInfluencer)
  //     let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())


  //     if(this.maximoS !=0 &&
  //        this.minimoS!=0 &&
  //        this.contenidoNombre!="" &&
  //         this.contenidoNombreRedes!="" && 
  //         this.actualGusto!="" && 
  //         this.minimoP!=0 &&
  //         this.maximoP!=0 &&
  //         this.ciudadseguidores!="" && 
  //         this.ciudadInfluencer!="" && 
  //         this.generoSeguidores!="" && 
  //         this.generoInfluencer!="" && 
  //         this.limiteInferiorSeguidores!=0 && 
  //         this.limiteSuperiorSeguidores!=0 && 
  //         this.limiteInferiorInfluencer!=0 &&
  //         this.limiteSuperiorInfluencer!=0
  //          ){
  //     this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaximaEdadMinimaGeneroGeneroInstagram(
  //       this.maximoS, 
  //       this.minimoS,
  //       this.contenidoNombre,
  //       this.contenidoNombreRedes,
  //       this.actualGusto,
  //       this.minimoP,
  //       this.maximoP,
  //       this.ciudadInfluencer,
  //       this.ciudadseguidores,
  //       fechaMax,
  //       fechaMin,
  //       this.limiteSuperiorSeguidores,
  //       this.limiteInferiorSeguidores,
  //       this.generoInfluencer,
  //       this.generoSeguidores
  //       ).subscribe(response=>{
  //         this.influencers=response
  //         if(this.influencers.length==0){
  //           alert("No se encontro ningun influencer con estas caracteristicas")
  //         }
  //         this.dialogRef.close(this.influencers); 
  //       }
  //       )
  //     }
  //     else{
  //       alert("Por favor complete los datos para realizar la busqueda")
  //     }
  //     // if(this.actualGusto!=""){
  //     //   this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGusto(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes,this.actualGusto).subscribe(response=>{
  //     //     this.influencers=response
  //     //     console.log(this.influencers)
  //     //   })
  //     // }

  //     // else if(this.contenidoNombreRedes!=""){
  //     //   this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoriaTipoContenido(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes).subscribe(response=>{
  //     //     this.influencers=response
  //     //     console.log(this.influencers)
  //     //   })
  //     // }

  //     // else if(this.contenidoNombre!=""){
  //     //   this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoria(this.maximoS, this.minimoS,this.contenidoNombre).subscribe(response=>{
  //     //     this.influencers=response
  //     //     console.log(this.influencers)
  //     //   })

  //     // }
  //     // else{
  //     //   this.filtroTikTokService.buscarPorLimiteDeSeguidores(this.maximoS, this.minimoS).subscribe(response=>{
  //     //     this.influencers=response
  //     //     console.log(this.influencers)
  //     //   })
  //     // }

     
  // }
  }
}
