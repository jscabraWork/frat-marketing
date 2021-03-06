import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Campania } from 'src/app/models/campania.model';

@Injectable({
  providedIn: 'root'
})
export class CampaniaService {

  constructor(private http:HttpClient) { }

  addCampania(campania:Campania, pMarca:number,pResponsable:number, pCategorias:string, pTipoContenido:string){
    return this.http.post<any>(`${API_URL}/campania/${pMarca}/${pResponsable}/${pCategorias}/${pTipoContenido}`,campania);
  }

  actualizarCampania(campania:Campania, pMarca:number,pResponsable:number, pCategorias:string, pTipoContenido:string){
    return this.http.put<any>(`${API_URL}/campania/${pMarca}/${pResponsable}/${pCategorias}/${pTipoContenido}`,campania);
  }

  getAllCampanias(){
    return this.http.get<any>(`${API_URL}/campanias`);
  }

  getCampaniaRequerimientos(idCampania:number){
    return this.http.get<any>(`${API_URL}/campanias/requerimientos/${idCampania}`); 
  }
  
  getCampaniaCompleta(idCampania:number){
    return this.http.get<any>(`${API_URL}/campanias/completa/${idCampania}`); 
  }

}
