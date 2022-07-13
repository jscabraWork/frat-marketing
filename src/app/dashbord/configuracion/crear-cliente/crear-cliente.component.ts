import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/data/empresa.service';
import { ImagenService } from 'src/app/services/data/imagen.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {


  selectedFiles: FileList;
  progressInfo = [];
  message = '';
  filename = '';
  fileInfo: Observable<any>;
  url
  imageSrc
  empresa:Empresa 
  constructor(private servicio:EmpresaService, private servicioImagen: ImagenService) { }
  
  ngOnInit(): void {
    this.empresa=new Empresa();
  }
  saveEmpresa(){
    this.empresa.nombre=this.empresa.nombre.toUpperCase();
    this.servicio.crearEmpresa(this.empresa).subscribe(response=>{
      this.ngOnInit()
      alert(response.mensaje)

      this.uploadFiles(response.empresa.id)
     
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

  uploadFiles(idEmpresa) {
    this.message = ''
    for (var i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i],idEmpresa);

    }
  }

  upload(index, file, idEmpresa) {
    this.progressInfo[index] = { values: 0, fileName: file.name }
    this.servicioImagen.uploadLogoEmpresa(file, idEmpresa).subscribe(event => {

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
