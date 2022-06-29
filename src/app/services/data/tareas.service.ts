import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { CrearTareas } from 'src/app/models/creacionTareas.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Tarea } from 'src/app/models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http:HttpClient) { }

  crearTareasDeCampania(idcampania:number,tareasCreacion:any ){
    return this.http.post<any>(`${API_URL}/tareas/${idcampania}`,tareasCreacion)
  }
  guardarRequerimientos(tareas:Tarea[]){ 
    return this.http.put<any>(`${API_URL}/tareas/requerimientos`,tareas)
  }
}
