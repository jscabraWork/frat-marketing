import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';
import { Campania } from 'src/app/models/campania.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Metrica } from 'src/app/models/metrica.model';
import { MetricaInfluenceador } from 'src/app/models/metricaInfluencer.model';
import { Tarea } from 'src/app/models/tarea.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { ImagenService } from 'src/app/services/data/imagen.service';
import { InfluencerService } from 'src/app/services/data/influencer.service';
import { TareasService } from 'src/app/services/data/tareas.service';

@Component({
  selector: 'app-cargar-metricas',
  templateUrl: './cargar-metricas.component.html',
  styleUrls: ['./cargar-metricas.component.css']
})
export class CargarMetricasComponent implements OnInit {
  
  cargarContenido:boolean
  cargarMetricas:boolean
  campanias: Campania[] = []
  idActual:number
  idTarea:number
  tareaActual:Tarea
  influencer:Influencer
  tareas: Tarea[]=[]
  tipos:TipoContenido[]=[]
  metricasN:Metrica[]=[]
  metricas:MetricaInfluenceador[]=[]

//METRICAS CONTENIDO
  selectedFiles: FileList;
  progressInfo = [];
  message = '';
  filename = '';
  fileInfo: Observable<any>;
  url
  imageSrc

//CONTENIDO TAREA
  selectedFiles2: FileList;
  progressInfo2 = [];
  message2 = '';
  filename2 = '';
  fileInfo2: Observable<any>;
  url2
  imageSrc2


  constructor(    private auth: AuthService,
    private servicio: InfluencerService,
    private servicioTareas: TareasService,
    private servicioImagen: ImagenService
    ) { }

  ngOnInit(): void {
    

    this.cargarContenido=false
    this.cargarMetricas=false
    this.idTarea=0
    this.idActual=0
    this.tareaActual = null
    this.tareas=[]
    this.tipos=[]
    this.metricasN=[]
    this.metricas=[]


 
    this.progressInfo = [];
    this.message = '';
    this.filename = '';
  
    this. url =''
    this.imageSrc=''


    this.progressInfo2 = [];
    this.message2 = '';
    this.filename2 = '';

    this. url2=''
    this.imageSrc2=''


    if(this.auth.isAuthenticated()){
      this.servicio.getInfluencerYCampaniasPorId(this.auth.usuario.id).subscribe(response=>{

        this.influencer = response.influencer
        this.campanias = response.campanias
      })
  }
  }




  cambiar() {
 
    this.servicio.getTareasDeInfluenceadorCampaniaNoTerminada(this.influencer.id, this.idActual).subscribe(response=>{
      this.tareas = response.tareas
      this.tipos = response.tipos

    })
  }

  cambiarTarea(){
    for(let i = 0; i < this.tareas.length; i++){
      if(this.tareas[i].id = this.idTarea){
        this.tareaActual = this.tareas[i]
        this.tareaActual.alcance= null
        this.tareaActual.impresion= null
      }
    }

    this.servicioTareas.getMetricasTarea(this.idTarea).subscribe(response=>{
      console.log(response)
      this.metricasN = response.metricasN
      this.metricas = response.metricas
      for(let i = 0; i < this.metricas.length; i++){
        this.metricas[i].valor = null
      }
    })
  }

  guardar(){

    let metricas = ""
    let valores = ""
    for(let i = 0; i < this.metricas.length; i++){
      metricas += this.metricas[i].id + "_"
      valores += this.metricas[i].valor + "_"
    }
     metricas+='-1' 
      valores+='-1'
      console.log(metricas)
      console.log(valores)
    this.servicioTareas.cargarMetrica(metricas,valores,this.tareaActual).subscribe(response=>{

      response
    
      this.uploadFiles(this.tareaActual.id)
      this.uploadFiles2(this.tareaActual.id)
      alert("Metricas guardadas")
      this.ngOnInit()
    },
    error=>{
      error
      alert("Error al guardar metricas")
    }
    )
  }

//CARGAR METRICAS
  selectFiles(event) {


    this.cargarMetricas=true
    this.progressInfo = [];
    event.target.files.length == 1 ? this.filename = event.target.files[0].name : this.filename = event.target.files.length + " archivos";
    this.selectedFiles = event.target.files;

    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(this.selectedFiles[0]);
  }

  uploadFiles(idTarea) {
    this.message = ''
    for (var i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i],idTarea);

    }
  }

  upload(index, file, idTarea) {
    this.progressInfo[index] = { values: 0, fileName: file.name }
    this.servicioImagen.uploadMetricasTarea(file, idTarea).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        this.message="Imagen cargada"
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
//CARGAR CONTENIDO


selectFiles2(event) {

  this.cargarContenido=true
  this.progressInfo2 = [];
  event.target.files.length == 1 ? this.filename2 = event.target.files[0].name : this.filename2 = event.target.files.length + " archivos";
  this.selectedFiles2 = event.target.files;

  const reader = new FileReader();
  reader.onload = e => this.imageSrc2 = reader.result;

  reader.readAsDataURL(this.selectedFiles2[0]);
}

uploadFiles2(idTarea) {
  this.message2 = ''
  for (var i = 0; i < this.selectedFiles2.length; i++) {
    this.upload2(i, this.selectedFiles2[i],idTarea);

  }
}

upload2(index, file, idTarea) {
  this.progressInfo2[index] = { values: 0, fileName: file.name }
  this.servicioImagen.uploadCotenidoTarea(file, idTarea).subscribe(event => {

    if (event.type === HttpEventType.UploadProgress) {
      this.progressInfo2[index].value = Math.round(100 * event.loaded / event.total);
      this.message2="Imagen cargada"
    }
    else if (event instanceof HttpResponse) {
      this.fileInfo2 = this.servicioImagen.getFiles();
    }

  },
    error => {
      error
      this.progressInfo[index].value = 0
      this.message = "Foto  " + file.name + " ya estaba en nuestra base de datos y se puso de perfil"
      
    })
}
    
  }

