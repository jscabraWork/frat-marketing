import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Campania } from 'src/app/models/campania.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Metrica } from 'src/app/models/metrica.model';
import { MetricaInfluenceador } from 'src/app/models/metricaInfluencer.model';
import { Tarea } from 'src/app/models/tarea.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { InfluencerService } from 'src/app/services/data/influencer.service';
import { TareasService } from 'src/app/services/data/tareas.service';

@Component({
  selector: 'app-cargar-metricas',
  templateUrl: './cargar-metricas.component.html',
  styleUrls: ['./cargar-metricas.component.css']
})
export class CargarMetricasComponent implements OnInit {
  
  campanias: Campania[] = []
  idActual:number
  idTarea:number
  tareaActual:Tarea
  influencer:Influencer
  tareas: Tarea[]=[]
  tipos:TipoContenido[]=[]
  metricasN:Metrica[]=[]
  metricas:MetricaInfluenceador[]=[]
  constructor(    private auth: AuthService,
    private servicio: InfluencerService,
    private servicioTareas: TareasService
    ) { }

  ngOnInit(): void {
    this.idTarea=0
    this.idActual=0

    if(this.auth.isAuthenticated()){
      this.servicio.getInfluencerYCampaniasPorId(this.auth.usuario.id).subscribe(response=>{

        this.influencer = response.influencer
        this.campanias = response.campanias
      })
  }
  }




  cambiar() {
 
    this.servicio.getTareasDeInfluenceadorCampania(this.influencer.id, this.idActual).subscribe(response=>{
      this.tareas = response.tareas
      this.tipos = response.tipos

    })
  }

  cambiarTarea(){
    for(let i = 0; i < this.tareas.length; i++){
      if(this.tareas[i].id = this.idTarea){
        this.tareaActual = this.tareas[i]
      }
    }

    this.servicioTareas.getMetricasTarea(this.idTarea).subscribe(response=>{
      console.log(response)
      this.metricasN = response.metricasN
      this.metricas = response.metricas
    })
  }
}
