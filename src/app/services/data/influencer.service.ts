import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Influencer } from 'src/app/models/influencer.model';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private http:HttpClient) { }

  crearInfluencer(influencer:Influencer,iCiudad:string,mascotas:string,ocupaciones:string,gustos:string,disgustos:string,tipoContenido:string,tipoContenidoCampania:string,precios:string,alcances:string, ciudadId:number, generos:string,porcentajes:string, rangos:string,porcentajesRangos:string){
    return this.http.post<any>(`${API_URL}/influencer/${iCiudad}/${mascotas}/${ocupaciones}/${gustos}/${disgustos}/${tipoContenido}/${tipoContenidoCampania}/${precios}/${alcances}/${ciudadId}/${generos}/${porcentajes}/${rangos}/${porcentajesRangos}`,influencer);
                                          
  }
 
  getInfluencers(){
    return this.http.get<any>(`${API_URL}/influencers`);
  }

  getInfluencerPorId(id:number){
    return this.http.get<any>(`${API_URL}/influencers/${id}`);
  }
  getInfluencerYCampaniasPorId(id:number){
    return this.http.get<any>(`${API_URL}/influencers/campanias/${id}`);
  }

  getTareasDeInfluenceadorCampania(id:number,idCampania:number){
    return this.http.get<any>(`${API_URL}/influencers/campanias/tareas/${id}/${idCampania}`);
  }

  getTareasDeInfluenceadorCampaniaNoTerminada(id:number,idCampania:number){
    return this.http.get<any>(`${API_URL}/influencers/campanias/tareas/no/${id}/${idCampania}`);
  }
}
