import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  selector: 'app-crear-campanias',
  templateUrl: './crear-campanias.component.html',
  styleUrls: ['./crear-campanias.component.css']
})
export class CrearCampaniasComponent implements OnInit {


  limiteInferior:number 
  limiteSuperior:number
  limiteInferior2:number 
  limiteSuperior2:number

  listaEdades:number[]=[]
  companias:Empresa[]=[]
  idEmpresa:number=0
  idMarca:number=0

  multiplesGenero:boolean

  idKam:number=0
  marcas:Marca[]=[]

  administradores:Administrador[]=[]
  categorias:TipoContenidoInfluencer[]=[]
  categoriasElegidas:TipoContenidoInfluencer[]=[]
  tipoContenidos:TipoContenido[]=[]

  tipoContenidosElegidos:TipoContenido[]=[]

  

  categoriaActual:TipoContenidoInfluencer
  campania:Campania
  constructor(
    private empresaService:EmpresaService,
    private industriaService: IndustriasService,
    private adminService: AdminService,
 
    private servicioTipoContenido: TipoContenidoService,
    private servicioCampania: CampaniaService,
    private servicioTipoContenidoInfluencer: TipoContenidoInfluencerService,
  ) { }

  ngOnInit(): void {
    this.multiplesGenero=false
    this.limiteInferior=0
    this.limiteInferior2=0
    this.limiteSuperior=0
    this.limiteSuperior2=0
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
      descripcion:'',
      queVanADecir:'',
      alcance:'',
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
      cpmEstimado:'',
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
    
    if(this.multiplesGenero){
      this.campania.rangoEdad2 = this.limiteInferior2 +"-"+this.limiteSuperior2
    }

    this.servicioCampania.addCampania(this.campania,this.idMarca,this.idKam,categoria,tipoContenido).subscribe(
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
  agregarGenero(){
    this.multiplesGenero=true
  }
}
