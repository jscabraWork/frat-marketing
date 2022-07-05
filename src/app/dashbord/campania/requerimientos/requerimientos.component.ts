import { Component, OnInit } from '@angular/core';
import { Campania } from 'src/app/models/campania.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Tarea } from 'src/app/models/tarea.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { TareasService } from 'src/app/services/data/tareas.service';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.css']
})
export class RequerimientosComponent implements OnInit {

  campanias: Campania[] = []
  idActual: number = 0
  influencers: Influencer[] = []
  tareas: Tarea[][] = []
  tipoContenidos: TipoContenido[][] = []
  horas: string[] = []
  numerosTareas:string[] = []

  tarea: Tarea = {
    id: 0,
    fecha: new Date(),
    horaPublicacion: "",
    hacer: "",
    noHacer: "",
    pitch: "",
    terminada: false,
    retenciones: 0,
    impresiones:0,
      alcance:0
  }
  constructor(private servicioCampania: CampaniaService, private tareaService: TareasService) { }

  ngOnInit(): void {
    this.empezar()
    this.campanias = []
    this.servicioCampania.getAllCampanias().subscribe(
      (response) => {
        this.campanias = response.campanias
      })
  }
  empezar(){
    this.horas=[]
    this.tipoContenidos=[]
    this.tareas=[]
    this.influencers=[]
 
    this.tarea = {
      id: 0,
      fecha: new Date(),
      horaPublicacion: "",
      hacer: "",
      noHacer: "",
      pitch: "",
      terminada: false,
      retenciones: 0,
      impresiones:0,
      alcance:0
    }
    this.numerosTareas=[]

    this.horas.push(12 + 'AM')
    for (let i = 1; i < 12; i++) {
      this.horas.push(i + 'AM')
    }
    this.horas.push(12 + 'PM')
    for (let i = 1; i < 12; i++) {
      this.horas.push(i + 'PM')
    }
  }

  cambiar() {
    this.empezar();
    if (this.idActual != 0) {
      this.servicioCampania.getCampaniaRequerimientos(this.idActual).subscribe(
        response => {
          this.influencers = response.influencers
          this.tareas = response.tareas
          this.tipoContenidos = response.tipoContenidos


        }
      )
    }
    else {
      alert("Selecciona una campaña")
    }
  }
  darNombresDeTipoContenido(tipoContenido: TipoContenido[]) {
    let nombres: string[] = [];
    for (let i = 0; i < tipoContenido.length; i++) {
      let encontro = false;
      for (let j = 0; j < nombres.length && !encontro; j++) {
        if (tipoContenido[i].nombre == nombres[j]) {
          encontro = true
        }
      }
      if (!encontro) {
        nombres.push(tipoContenido[i].nombre)
      }
    }

    return nombres;
  }

  darCantidadesDeTipoContenido(tipoContenido: TipoContenido[]) {
    let nombres: string[] = [];
    let numeros: number[] = [];
    for (let i = 0; i < tipoContenido.length; i++) {
      let encontro = false;
      for (let j = 0; j < nombres.length && !encontro; j++) {
        if (tipoContenido[i].nombre == nombres[j]) {
          encontro = true
          numeros[j] = numeros[j] + 1;

        }
      }
      if (!encontro) {
        nombres.push(tipoContenido[i].nombre)
        numeros.push(1)
      }

    }

    return numeros;
  }

  guardarUnaTarea(i: number) {
    this.tareaService.guardarRequerimientos(this.tareas[i]).subscribe(response => {
      alert("Se guardo de manera exitosa")
    },
      error => {
        alert("Sucedio un error, por favor revisa los datos")
      })
  }

  guardarTodasTareas() {
    for (let i = 0; i < this.tareas.length; i++) {
      this.tareaService.guardarRequerimientos(this.tareas[i]).subscribe(response => {
        alert("Se guardo de manera exitosa")
      },
        error => {
          alert("Sucedio un error, por favor revisa los datos")
        })
    }
  }
  seleccionarTarea(i:number,j:number){
    let encontro = false;

    for (let k=0;k<this.numerosTareas.length &&!encontro;k++){
      if((i+','+j)==this.numerosTareas[k]){
        encontro = true;
        this.numerosTareas.splice(k,1)
      }
    }

    if(!encontro){
      this.numerosTareas.push(i+','+j);
    }
    console.log(this.numerosTareas)
  }

  aplicarATodos(){
    for(let i=0; i < this.numerosTareas.length;i++){
      let numerosActual:string[] = this.numerosTareas[i].split(",");

      this.tareas[parseInt(numerosActual[0])][parseInt(numerosActual[1])].hacer = this.tarea.hacer
      this.tareas[parseInt(numerosActual[0])][parseInt(numerosActual[1])].noHacer = this.tarea.noHacer
      this.tareas[parseInt(numerosActual[0])][parseInt(numerosActual[1])].pitch = this.tarea.pitch
      this.tareas[parseInt(numerosActual[0])][parseInt(numerosActual[1])].fecha= this.tarea.fecha
      this.tareas[parseInt(numerosActual[0])][parseInt(numerosActual[1])].horaPublicacion = this.tarea.horaPublicacion
      
    }
    alert("Aplicacion a todas las tareas terminado")
  }
}
