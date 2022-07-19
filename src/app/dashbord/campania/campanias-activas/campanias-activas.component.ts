import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador.model';
import { Campania } from 'src/app/models/campania.model';

import { Empresa } from 'src/app/models/empresa.model';

import { Marca } from 'src/app/models/marca.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { AdminService } from 'src/app/services/data/admin.service';
import { CampaniaService } from 'src/app/services/data/campania.service';

import { EmpresaService } from 'src/app/services/data/empresa.service';
import { IndustriasService } from 'src/app/services/data/industrias.service';
import { TipoContenidoInfluencerService } from 'src/app/services/data/tipo-contenido-influencer.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';

@Component({
  selector: 'app-campanias-activas',
  templateUrl: './campanias-activas.component.html',
  styleUrls: ['./campanias-activas.component.css']
})
export class CampaniasActivasComponent implements OnInit {



  visualizar:boolean = false;
  editar:boolean = false;
  limiteInferior:number =0
  limiteSuperior:number=0

  limiteInferior2:number 
  limiteSuperior2:number

  listaEdades:number[]=[]
  companias:Empresa[]=[]
  idEmpresa:number=0
  idMarca:number=0
  
  idKam:number=0
  marcas:Marca[]=[]

  administradores:Administrador[]=[]
  categorias:TipoContenidoInfluencer[]=[]
  categoriasElegidas:TipoContenidoInfluencer[]=[]
  tipoContenidos:TipoContenido[]=[]

  tipoContenidosElegidos:TipoContenido[]=[]

  nombreEmpresa:string=""
  nombreMarca:string=""

  nombreKam:string=""
  imagenes:string[]=[]
  categoriaActual:TipoContenidoInfluencer
  campania:Campania
  campanias:Campania[]=[]
  constructor( private servicioCampania: CampaniaService,
    private empresaService:EmpresaService,
    private industriaService: IndustriasService,
    private adminService: AdminService,

    private servicioTipoContenido: TipoContenidoService,
    private servicioTipoContenidoInfluencer: TipoContenidoInfluencerService
    ) { }

  ngOnInit(): void {


    this.limiteInferior=null
    this.limiteInferior2=null
    this.limiteSuperior=null
    this.limiteSuperior2=null
    this.nombreEmpresa=""
    this.nombreMarca=""
  
    this.nombreKam=""
  
    this.editar = false
    this.visualizar = false
    this.campanias =[]
    this.servicioCampania.getAllCampanias().subscribe(
      (response) => {
        this.campanias = response.campanias
        this.imagenes = response.imagenes
      })

      this.idEmpresa=0
    this.idMarca=0
 
    this.idKam=0

    this.marcas=[]

    this.administradores=[]
    this.categorias=[]
    this.categoriasElegidas=[]

    this.tipoContenidosElegidos=[]
    this.tipoContenidos=[] 


    this.categoriaActual={
      id:0,
      nombre:'',
    }

    this.campania={
      id:0,
      nombre:'',
 
      queVanADecir:'',
      alcanceEstimado:0,
      fechaInicio:new Date(),
      fechaFin:new Date(),
      metodologia:'',
      perfilInfluenceador:'',
      genero:'',
      rangoEdad:null,
      genero2:'',
      rangoEdad2:null,
      presupuesto:0,
      redSocial:'',
      terminada:false,

      publico:null
    }
    for(let i=1; i <=70 ; i++){
      this.listaEdades.push(i)
    }
    this.empresaService.getAllEmpresa().subscribe(
      response=>{
        this.companias=response.empresas
      }
    )

    this.adminService.getAllAdministradores().subscribe(
      response=>{
        this.administradores=response.kams
      }
    )
    this.servicioTipoContenidoInfluencer.getAllTipoContenidoInfluencer().subscribe(
      response=>{
        this.categorias=response.tipoContenidos
      }
    )
    this.servicioTipoContenido.getAllTipoContenido().subscribe(
      response=>{
        this.tipoContenidos=response.tipoContenidos
      }
    )
  }

  seleccionarCampania(id:number){

    this.servicioCampania.getCampaniaCompleta(id).subscribe(response=>{
      this.editar =true
      console.log(response.tipoContenidosCampania)
      this.campania = response.campania
      this.idEmpresa = response.empresa.id
      this.buscarMarcas()

      this.idMarca = response.marca.id
      this.idKam = response.kam.id
      this.categoriasElegidas = response.tipoContenidosCampania
      this.tipoContenidosElegidos = response.tipoContenidos
      this.limiteInferior = parseInt( this.campania.rangoEdad.split("-")[0])
      this.limiteSuperior = parseInt( this.campania.rangoEdad.split("-")[1])
    if(this.campania.rangoEdad2!=null){
      this.limiteInferior2 = parseInt( this.campania.rangoEdad2.split("-")[0])
      this.limiteSuperior2 = parseInt( this.campania.rangoEdad2.split("-")[1])
    }
    })
  }

  seleccionarCampaniaVisualizar(id:number){
    this.servicioCampania.getCampaniaCompleta(id).subscribe(response=>{
      this.visualizar = true
      console.log(response)
      this.campania = response.campania
      this.nombreEmpresa = response.empresa.nombre
      this.nombreMarca = response.marca.razonSocial

      this.nombreKam = response.kam.nombre
      this.categoriasElegidas = response.tipoContenidosCampania
      this.tipoContenidosElegidos = response.tipoContenidos

      this.limiteInferior = parseInt( this.campania.rangoEdad.split("-")[0])
      this.limiteSuperior = parseInt( this.campania.rangoEdad.split("-")[1])
      if(this.campania.rangoEdad2!=null){
        this.limiteInferior2 = parseInt( this.campania.rangoEdad2.split("-")[0])
        this.limiteSuperior2 = parseInt( this.campania.rangoEdad2.split("-")[1])
      }
    })
  }

  darElegido(id:number){
    let elegido= false
    for(let i =0; i < this.tipoContenidosElegidos.length &&!elegido;i++){
      if(this.tipoContenidosElegidos[i].id==id){
        elegido=true
      }
    }

    return elegido
  }

  buscarMarcas(){
    this.empresaService.getMarcas(this.idEmpresa).subscribe(
      response=>{
        this.marcas=response.marcas
      }
      ,error=>{
        console.log(error)
      
        alert(error.error.mensaje)
      }
    )
  }
  saveCampania(){
    //pMarca:number,pIndustria:number,pResponsable:number, pCategorias:string, pTipoContenido:string
    let categoria= ""
    for(let i=0;i<this.categoriasElegidas.length;i++){
      categoria+=this.categoriasElegidas[i].id+"_"
    }
    categoria+='-1'
    let tipoContenido=""
    for(let i=0;i<this.tipoContenidosElegidos.length;i++){
      tipoContenido+=this.tipoContenidosElegidos[i].id+"_"
    }
    tipoContenido+='-1'
    this.campania.rangoEdad = this.limiteInferior +"-"+this.limiteSuperior
    this.servicioCampania.actualizarCampania(this.campania,this.idMarca,this.idKam,categoria,tipoContenido).subscribe(
      response=>{
        alert(response.mensaje)
        this.ngOnInit()
        response
        
      }
      ,error=>{
        
        alert(error.error.mensaje)
      }
    )
  }
  agregarCategoria(){
    if(this.categoriaActual.id!=0){
      for(let i=0;i<this.categorias.length;i++){
        if(this.categorias[i].id==this.categoriaActual.id){
         this.categoriaActual=this.categorias[i]
        }
      }

      let encontro = false; 
      for(let i =0;i<this.categoriasElegidas.length && !encontro;i++){
        if(this.categoriasElegidas[i].id==this.categoriaActual.id){
          alert("Esta categoria ya fue agregada a la campaña")
          encontro=true
        }
      }
      if(!encontro){
        this.categoriasElegidas.push(this.categoriaActual)
      }
  
      this.categoriaActual ={
        id:0,
        nombre:""
      }

    }
    else{
      alert('Seleccione una categoria')
    }
  }
  eliminaCategoria(id:number){
    for(let i=0;i<this.categoriasElegidas.length;i++){
      if(this.categoriasElegidas[i].id==id){
        this.categoriasElegidas.splice(i,1)
      }
    }
  }


  agregareliminarTipoContenido(id:number){
    console.log(this.tipoContenidosElegidos)
    let encontro = false
    for(let i=0;i<this.tipoContenidosElegidos.length && !encontro;i++){
      if(this.tipoContenidosElegidos[i].id==id){
        this.tipoContenidosElegidos.splice(i,1)
        encontro= true
      }
    }
    if(!encontro){
      for(let i=0;i<this.tipoContenidos.length;i++){
        if(this.tipoContenidos[i].id==id){
          this.tipoContenidosElegidos.push(this.tipoContenidos[i])
          encontro= true
        }
      }
    }
  }
}
