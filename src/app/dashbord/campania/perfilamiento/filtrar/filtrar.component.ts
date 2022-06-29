import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Gusto } from 'src/app/models/gusto.model';
import { Influencer } from 'src/app/models/influencer.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { CiudadesService } from 'src/app/services/data/ciudades.service';
import { FiltroInstagramService } from 'src/app/services/data/filtro-instagram.service';
import { FiltroTikTokService } from 'src/app/services/data/filtro-tik-tok.service';
import { GustosService } from 'src/app/services/data/gustos.service';
import { TipoContenidoInfluencerService } from 'src/app/services/data/tipo-contenido-influencer.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';
import { PerfilamientoComponent } from '../perfilamiento.component';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {


  ciudadseguidores:string=""
  ciudadInfluencer:string=""

  ciudades:Ciudad[]=[]

  redSocial:string=""
  limiteInferiorSeguidores:number =0
  limiteSuperiorSeguidores:number=0

  limiteInferiorInfluencer:number =0
  limiteSuperiorInfluencer:number=0  
  listaEdades:number[]=[]
  generoInfluencer:string=""
  generoSeguidores:string=""

  tipoContenidos:TipoContenidoInfluencer[]=[]
  contenidoNombre:string=""


  gustos:Gusto[]=[]

  actualGusto:string=""

  minimoP:number=0
  maximoP:number=0

  minimoS:number=0
  maximoS:number=0
  tipoContenidosRedes:TipoContenido[]=[]
  contenidoNombreRedes:string=""

  influencers:Influencer[]=[]
  constructor(
    public dialogRef: MatDialogRef<PerfilamientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioTipoContenido: TipoContenidoInfluencerService,
    private servicioCiudades: CiudadesService,
    private servicioGustos: GustosService, 
    private servicioTipoContenidoRedes: TipoContenidoService,
    private filtroInstagramService:FiltroInstagramService,
    private filtroTikTokService:FiltroTikTokService
    ) { }

  ngOnInit(): void {
    this.tipoContenidos=[]
    this.redSocial =  this.data.red

    this.ciudadseguidores=""
    this.ciudadInfluencer=""
    this. actualGusto=""

  this.ciudades=[]
  for(let i=1; i <=70 ; i++){
    this.listaEdades.push(i)
  }

  this.servicioTipoContenidoRedes.getAllTipoContenido().subscribe(
    response=>{
      this.tipoContenidosRedes=response.tipoContenidos
      let a:TipoContenido[]=[]

      for(let i =0;i < this.tipoContenidosRedes.length;i++){

        if(this.tipoContenidosRedes[i].redSocial==this.redSocial ||this.tipoContenidosRedes[i].redSocial=='Presencial'){
          a.push(this.tipoContenidosRedes[i])
        }
        else{

        
        }
      }
      this.tipoContenidosRedes = a

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
  }
  

  filtrar(){
    if(this.redSocial=="Instagram"){


      let fechaMaxS = new Date();
      fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteSuperiorSeguidores)
      let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())
      let fechaMinS = new Date();
      fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteInferiorInfluencer)
      let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())

      if(this.maximoS !=0 &&
         this.minimoS!=0 &&
         this.contenidoNombre!="" &&
          this.contenidoNombreRedes!="" && 
          this.actualGusto!="" && 
          this.minimoP!=0 &&
          this.maximoP!=0 &&
          this.ciudadseguidores!="" && 
          this.ciudadInfluencer!="" && 
          this.generoSeguidores!="" && 
          this.generoInfluencer!="" && 
          this.limiteInferiorSeguidores!=0 && 
          this.limiteSuperiorSeguidores!=0 && 
          this.limiteInferiorInfluencer!=0 &&
          this.limiteSuperiorInfluencer!=0
           ){
      this.filtroInstagramService.
      buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaximaEdadMinimaGeneroGeneroInstagram(
        this.maximoS, 
        this.minimoS,
        this.contenidoNombre,
        this.contenidoNombreRedes,
        this.actualGusto,
        this.minimoP,
        this.maximoP,
        this.ciudadInfluencer,
        this.ciudadseguidores,
        fechaMax,
        fechaMin,
        this.limiteSuperiorSeguidores,
        this.limiteInferiorSeguidores,
        this.generoInfluencer,
        this.generoSeguidores
        ).subscribe(response=>{
          this.influencers=response
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          this.dialogRef.close(this.influencers); 
       
        }
        )
      }
      else{
        alert("Por favor complete los datos para realizar la busqueda")
      }
      // if(this.minimoS!=0 && this.maximoS!=0){

      

      //   // if(this.minimoP!=0){
      //   //   this.filtroInstagramService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimo(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes,this.actualGusto,this.minimoP).subscribe(response=>{
      //   //     this.influencers=response
      //   //     console.log(this.influencers)
      //   //   })
      //   // }

      //   // else if(this.maximoP!=0){
      //   //   this.filtroInstagramService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximo(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes,this.actualGusto,this.minimoP,this.maximoP).subscribe(response=>{
      //   //     this.influencers=response
      //   //     console.log(this.influencers)
      //   //   })
      //   // }
      //   // else if(this.actualGusto!=""){
      //   //   this.filtroInstagramService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGusto(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes,this.actualGusto).subscribe(response=>{
      //   //     this.influencers=response
      //   //     console.log(this.influencers)
      //   //   })
      //   // }

      //   // else if(this.contenidoNombreRedes!=""){
      //   //   this.filtroInstagramService.buscarPorLimiteDeSeguidoresCategoriaTipoContenido(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes).subscribe(response=>{
      //   //     this.influencers=response
      //   //     console.log(this.influencers)
      //   //   })
      //   // }

      //   // else if(this.contenidoNombre!=""){
      //   //   this.filtroInstagramService.buscarPorLimiteDeSeguidoresCategoria(this.maximoS, this.minimoS,this.contenidoNombre).subscribe(response=>{
      //   //     this.influencers=response
      //   //     console.log(this.influencers)
      //   //   })

      //   // }
      //   // else{
      //   //   this.filtroInstagramService.buscarPorLimiteDeSeguidores(this.maximoS, this.minimoS).subscribe(response=>{
      //   //     this.influencers=response
      //   //     console.log(this.influencers)
      //   //   })
      //   // }
    

      // }


    }
    else if(this.redSocial=="TikTok"){

      let fechaMaxS = new Date();
      fechaMaxS.setFullYear(fechaMaxS.getFullYear()-this.limiteSuperiorSeguidores)
      let fechaMax=(fechaMaxS.getFullYear()+'-'+fechaMaxS.getMonth()+'-'+fechaMaxS.getDay())
      let fechaMinS = new Date();
      fechaMinS.setFullYear(fechaMinS.getFullYear()-this.limiteInferiorInfluencer)
      let fechaMin=(fechaMinS.getFullYear()+'-'+fechaMinS.getMonth()+'-'+fechaMinS.getDay())


      if(this.maximoS !=0 &&
         this.minimoS!=0 &&
         this.contenidoNombre!="" &&
          this.contenidoNombreRedes!="" && 
          this.actualGusto!="" && 
          this.minimoP!=0 &&
          this.maximoP!=0 &&
          this.ciudadseguidores!="" && 
          this.ciudadInfluencer!="" && 
          this.generoSeguidores!="" && 
          this.generoInfluencer!="" && 
          this.limiteInferiorSeguidores!=0 && 
          this.limiteSuperiorSeguidores!=0 && 
          this.limiteInferiorInfluencer!=0 &&
          this.limiteSuperiorInfluencer!=0
           ){
      this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaximaEdadMinimaGeneroGeneroInstagram(
        this.maximoS, 
        this.minimoS,
        this.contenidoNombre,
        this.contenidoNombreRedes,
        this.actualGusto,
        this.minimoP,
        this.maximoP,
        this.ciudadInfluencer,
        this.ciudadseguidores,
        fechaMax,
        fechaMin,
        this.limiteSuperiorSeguidores,
        this.limiteInferiorSeguidores,
        this.generoInfluencer,
        this.generoSeguidores
        ).subscribe(response=>{
          this.influencers=response
          if(this.influencers.length==0){
            alert("No se encontro ningun influencer con estas caracteristicas")
          }
          this.dialogRef.close(this.influencers); 
        }
        )
      }
      else{
        alert("Por favor complete los datos para realizar la busqueda")
      }
      // if(this.actualGusto!=""){
      //   this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGusto(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes,this.actualGusto).subscribe(response=>{
      //     this.influencers=response
      //     console.log(this.influencers)
      //   })
      // }

      // else if(this.contenidoNombreRedes!=""){
      //   this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoriaTipoContenido(this.maximoS, this.minimoS,this.contenidoNombre,this.contenidoNombreRedes).subscribe(response=>{
      //     this.influencers=response
      //     console.log(this.influencers)
      //   })
      // }

      // else if(this.contenidoNombre!=""){
      //   this.filtroTikTokService.buscarPorLimiteDeSeguidoresCategoria(this.maximoS, this.minimoS,this.contenidoNombre).subscribe(response=>{
      //     this.influencers=response
      //     console.log(this.influencers)
      //   })

      // }
      // else{
      //   this.filtroTikTokService.buscarPorLimiteDeSeguidores(this.maximoS, this.minimoS).subscribe(response=>{
      //     this.influencers=response
      //     console.log(this.influencers)
      //   })
      // }

     
  }
  }
}
