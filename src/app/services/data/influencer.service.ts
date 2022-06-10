import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Influencer } from 'src/app/models/influencer.model';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private http:HttpClient) { }

  crearInfluencer(influencer:Influencer,iCiudad:number,mascotas:string,ocupaciones:string,gustos:string,tipoContenido:string){
    return this.http.post<any>(`${API_URL}/influencer/${iCiudad}/${mascotas}/${ocupaciones}/${gustos}/${tipoContenido}`,influencer);
  }
}
