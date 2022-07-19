import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from 'src/app/app.constants';
import { TipoContenido } from 'src/app/models/tipoContenido.model';

import { Sector } from 'src/app/models/sector.model';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Mascotas } from 'src/app/models/mascota.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';

import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
import { Genero } from 'src/app/models/genero.model';
import { Rango } from 'src/app/models/rangos.model';
import { Metrica } from 'src/app/models/metrica.model';
@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http:HttpClient) { }



  crearTipoContenido(tipoContenido:TipoContenido, metricas:string){
    return this.http.post<any>(`${API_URL}/tipoContenido/${metricas}`,tipoContenido);
  }


  crearTipoContenidoInfluencer(tipoContenido:TipoContenidoInfluencer){
    return this.http.post<any>(`${API_URL}/tipoContenidoInfluencer`,tipoContenido);
  }



  crearSector(sector:Sector){
    return this.http.post<any>(`${API_URL}/sectores`,sector);
  }

  crearMetrica(metrica:Metrica){
    return this.http.post<any>(`${API_URL}/metricas`,metrica);
  }

  crearCiudad(ciudad:Ciudad){
    return this.http.post<any>(`${API_URL}/ciudades`,ciudad);
  }

  crearMascota(mascota:Mascotas){
    return this.http.post<any>(`${API_URL}/mascotas`,mascota);
  }

  crearOcupacion(ocupacion:Ocupacion){
    return this.http.post<any>(`${API_URL}/ocupaciones`,ocupacion);
  }

  crearGenero(genero:Genero){
    return this.http.post<any>(`${API_URL}/generos`,genero);
  }

  crearRango(rango:Rango){
    return this.http.post<any>(`${API_URL}/rangos`,rango);
  }

}

