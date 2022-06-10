import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { Marca } from 'src/app/models/marca.model';
import { Sector } from 'src/app/models/sector.model';
import { EmpresaService } from 'src/app/services/data/empresa.service';
import { MarcaService } from 'src/app/services/data/marca.service';
import { SectoresService } from 'src/app/services/data/sectores.service';

@Component({
  selector: 'app-crear-industria',
  templateUrl: './crear-industria.component.html',
  styleUrls: ['./crear-industria.component.css']
})
export class CrearIndustriaComponent implements OnInit {

  companias:Empresa[]=[]
  sectores:Sector[]=[]
  idEmpresa:number=0
  idSector:number=0
  marca:Marca={
    id:0,
    razonSocial:"",
    nit:"",
    contacto:"",
    cargo_contacto:"",
    otroContacto:"",
    telefono:"",
    correo:"",
    descripcion:"",
    facturacion:0,
  }
  constructor(
    private empresaService:EmpresaService,
    private sectorService:SectoresService,
    private marcaService:MarcaService
  ) { }


  ngOnInit(): void {
    this.idEmpresa=0
    this.idSector=0
    this.companias=[]
    this.sectores=[]
    this.marca={
      id:0,
      razonSocial:"",
      nit:"",
      contacto:"",
      cargo_contacto:"",
      otroContacto:"",
      telefono:"",
      correo:"",
      descripcion:"",
      facturacion:0,
    }
    this.empresaService.getAllEmpresa().subscribe(
      response=>{
        this.companias=response.empresas
      }
    )
    this.sectorService.getAllSectores().subscribe(
      response=>{
        this.sectores=response.sectores
      }
    )
  }
  saveMarca(){
    this.marcaService.crearMarca(this.marca,this.idEmpresa,this.idSector).subscribe(
      response=>{
        alert(response.mensaje + " " + response.marca.razonSocial)
      },
      error=>{
        alert(error.error.mensaje)
      }
    )
  }
}
