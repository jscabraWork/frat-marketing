import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa.model';
import { Marca } from 'src/app/models/marca.model';
import { Sector } from 'src/app/models/sector.model';
import { EmpresaService } from 'src/app/services/data/empresa.service';
import { ImagenService } from 'src/app/services/data/imagen.service';
import { MarcaService } from 'src/app/services/data/marca.service';
import { SectoresService } from 'src/app/services/data/sectores.service';

@Component({
  selector: 'app-crear-industria',
  templateUrl: './crear-industria.component.html',
  styleUrls: ['./crear-industria.component.css']
})
export class CrearIndustriaComponent implements OnInit {

  selectedFiles: FileList;
  progressInfo = [];
  message = '';
  filename = '';
  fileInfo: Observable<any>;
  url
  imageSrc

  companias:Empresa[]=[]
  sectores:Sector[]=[]
  idEmpresa:number=0
  idSector:number=0
  marca:Marca
  constructor(
    private empresaService:EmpresaService,
    private sectorService:SectoresService,
    private marcaService:MarcaService,
    private servicioImagen: ImagenService
  ) { }


  ngOnInit(): void {
    this.idEmpresa=0
    this.idSector=0
    this.companias=[]
    this.sectores=[]
    this.marca={
      id:0,
      razonSocial:null,
      nit:null,
      contacto:null,
      cargo_contacto:null,

      telefono:null,
      correo:null,
      descripcion:null,
      facturacion:"",
      contactoOtro:null,
      cargo_contactoOtro:null,
      telefonoOtro:null,
      correoOtro:null,
      logo:null
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
        this.uploadFiles(response.marca.id)
      },
      error=>{
        alert(error.error.mensaje)
      }
    )
  }


  
  selectFiles(event) {

    this.progressInfo = [];
    event.target.files.length == 1 ? this.filename = event.target.files[0].name : this.filename = event.target.files.length + " archivos";
    this.selectedFiles = event.target.files;

    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(this.selectedFiles[0]);
  }

  uploadFiles(idMarca) {
    this.message = ''
    for (var i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i],idMarca);

    }
  }

  upload(index, file, idMarca) {
    this.progressInfo[index] = { values: 0, fileName: file.name }
    this.servicioImagen.uploadLogoMarca(file, idMarca).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        this.message="Foto de perfil cambiada"
      }
      else if (event instanceof HttpResponse) {
        this.fileInfo = this.servicioImagen.getFiles();
      }

    },
      error => {
        error
        this.progressInfo[index].value = 0
        this.message = "Foto  " + file.name + " ya estaba en nuestra base de datos y se puso de perfil"
       
      })
  }
}
