import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/models/administrador.model';
import { Campania } from 'src/app/models/campania.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Empresa } from 'src/app/models/empresa.model';
import { Industria } from 'src/app/models/industria.model';
import { Marca } from 'src/app/models/marca.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { AdminService } from 'src/app/services/data/admin.service';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { CategoriaService } from 'src/app/services/data/categoria.service';
import { EmpresaService } from 'src/app/services/data/empresa.service';
import { IndustriasService } from 'src/app/services/data/industrias.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';

@Component({
  selector: 'app-crear-campanias',
  templateUrl: './crear-campanias.component.html',
  styleUrls: ['./crear-campanias.component.css']
})
export class CrearCampaniasComponent implements OnInit {


  limiteInferior:number =0
  limiteSuperior:number=0
  listaEdades:number[]=[]
  companias:Empresa[]=[]
  idEmpresa:number=0
  idMarca:number=0
  idIndustria:number=0
  idKam:number=0
  marcas:Marca[]=[]
  industrias:Industria[]=[]
  administradores:Administrador[]=[]
  categorias:Categoria[]=[]
  categoriasElegidas:Categoria[]=[]
  tipoContenidos:TipoContenido[]=[]

  tipoContenidosElegidos:TipoContenido[]=[]

  

  categoriaActual:Categoria={
    id:0,
    nombre:'',
  }
  campania:Campania ={
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
    rangoEdad:'',
    presupuesto:0,
    redSocial:'',
    terminada:false,
  }
  constructor(
    private empresaService:EmpresaService,
    private industriaService: IndustriasService,
    private adminService: AdminService,
    private categoriaService: CategoriaService,
    private servicioTipoContenido: TipoContenidoService,
    private servicioCampania: CampaniaService
  ) { }

  ngOnInit(): void {
    this.idEmpresa=0
    this.idMarca=0
    this.idIndustria=0
    this.idKam=0

    this.marcas=[]
    this.industrias=[]
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
      rangoEdad:'',
      presupuesto:0,
      redSocial:'',
      terminada:false,
    }
    for(let i=1; i <=70 ; i++){
      this.listaEdades.push(i)
    }
    this.empresaService.getAllEmpresa().subscribe(
      response=>{
        this.companias=response.empresas
      }
    )
    this.industriaService.getAllIndustrias().subscribe(
      response=>{
        this.industrias=response.industrias
      }
    )
    this.adminService.getAllAdministradores().subscribe(
      response=>{
        this.administradores=response.kams
      }
    )
    this.categoriaService.getAllCategorias().subscribe(
      response=>{
        this.categorias=response.categorias
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
    this.servicioCampania.addCampania(this.campania,this.idMarca,this.idIndustria,this.idKam,categoria,tipoContenido).subscribe(
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
