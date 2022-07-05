import { Component, OnInit } from '@angular/core';
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
  selector: 'app-campanias-activas',
  templateUrl: './campanias-activas.component.html',
  styleUrls: ['./campanias-activas.component.css']
})
export class CampaniasActivasComponent implements OnInit {



  visualizar:boolean = false;
  editar:boolean = false;
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

  nombreEmpresa:string=""
  nombreMarca:string=""
  nombreIndustria:string="" 
  nombreKam:string=""

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
    cpmEstimado:''
  }
  campanias:Campania[]=[]
  constructor( private servicioCampania: CampaniaService,
    private empresaService:EmpresaService,
    private industriaService: IndustriasService,
    private adminService: AdminService,
    private categoriaService: CategoriaService,
    private servicioTipoContenido: TipoContenidoService
    ) { }

  ngOnInit(): void {


    this.nombreEmpresa=""
    this.nombreMarca=""
    this.nombreIndustria="" 
    this.nombreKam=""
  
    this.editar = false
    this.visualizar = false
    this.campanias =[]
    this.servicioCampania.getAllCampanias().subscribe(
      (response) => {
        this.campanias = response.campanias
      })

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
      cpmEstimado:''
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

  seleccionarCampania(id:number){

    this.servicioCampania.getCampaniaCompleta(id).subscribe(response=>{
      this.editar =true
      console.log(response)
      this.campania = response.campania
      this.idEmpresa = response.empresa.id
      this.buscarMarcas()

      this.idMarca = response.marca.id
      this.idKam = response.kam.id
      this.categoriasElegidas = response.categorias
      this.tipoContenidosElegidos = response.tipoContenidos
      this.idIndustria = response.industria.id
      this.limiteInferior = parseInt( this.campania.rangoEdad.split("-")[0])
      this.limiteSuperior = parseInt( this.campania.rangoEdad.split("-")[1])
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
      this.categoriasElegidas = response.categorias
      this.tipoContenidosElegidos = response.tipoContenidos
      this.nombreIndustria = response.industria.nombre
      this.limiteInferior = parseInt( this.campania.rangoEdad.split("-")[0])
      this.limiteSuperior = parseInt( this.campania.rangoEdad.split("-")[1])
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
    this.servicioCampania.actualizarCampania(this.campania,this.idMarca,this.idIndustria,this.idKam,categoria,tipoContenido).subscribe(
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
