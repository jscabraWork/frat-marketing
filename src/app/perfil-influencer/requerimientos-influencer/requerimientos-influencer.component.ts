import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Campania } from 'src/app/models/campania.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Tarea } from 'src/app/models/tarea.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { InfluencerService } from 'src/app/services/data/influencer.service';

@Component({
  selector: 'app-requerimientos-influencer',
  templateUrl: './requerimientos-influencer.component.html',
  styleUrls: ['./requerimientos-influencer.component.css']
})
export class RequerimientosInfluencerComponent implements OnInit {

  campanias: Campania[] = []
  idActual:number
  idTarea:number
  influencer:Influencer
  tareas: Tarea[]=[]
  tipos:TipoContenido[]=[]
  nombres:string[]=[]
  cantidades:number[]=[]
  constructor(    private auth: AuthService,
    private servicio: InfluencerService) { }

  ngOnInit(): void {
    this.idTarea=0
    this.idActual=0
    this.nombres=[]
    this.cantidades =[]
    if(this.auth.isAuthenticated()){
      this.servicio.getInfluencerYCampaniasPorId(this.auth.usuario.id).subscribe(response=>{

        this.influencer = response.influencer
        this.campanias = response.campanias
      })
  }
  }


  cambiar() {
    this.nombres=[]
    this.cantidades =[]
    this.servicio.getTareasDeInfluenceadorCampania(this.influencer.id, this.idActual).subscribe(response=>{
      this.tareas = response.tareas
      this.tipos = response.tipos
      for(let i=0;i<this.tipos.length;i++){
        let encontro =false
        let pos =0;
        for(let j =0; j < this.nombres.length && !encontro; j++){
          if(this.nombres[j] == this.tipos[i].nombre){
            encontro = true 
            pos = j;
          }
        }
        if(!encontro){
          this.nombres.push(this.tipos[i].nombre)
          this.cantidades.push(1)
        }
        else{
          this.cantidades[pos] =this.cantidades[pos]+1
 
        }
      }
    })
  }
}
