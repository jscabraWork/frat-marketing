import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Industria } from 'src/app/models/industria.model';
import { API_URL } from 'src/app/app.constants';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Sector } from 'src/app/models/sector.model';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Mascotas } from 'src/app/models/mascota.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';
import { Gusto } from 'src/app/models/gusto.model';
import { TipoContenidoInfluencer } from 'src/app/models/tipoContenidoInfluencer.model';
@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http:HttpClient) { }

  crearIndustria(industria:Industria){
    return this.http.post<any>(`${API_URL}/industrias`,industria);
  }

  crearTipoContenido(tipoContenido:TipoContenido){
    return this.http.post<any>(`${API_URL}/tipoContenido`,tipoContenido);
  }


  crearTipoContenidoInfluencer(tipoContenido:TipoContenidoInfluencer){
    return this.http.post<any>(`${API_URL}/tipoContenidoInfluencer`,tipoContenido);
  }

  crearCategoria(categoria:Categoria){
    return this.http.post<any>(`${API_URL}/categorias`,categoria);
  }

  crearSector(sector:Sector){
    return this.http.post<any>(`${API_URL}/sectores`,sector);
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

  crearGusto(gusto:Gusto){
    return this.http.post<any>(`${API_URL}/gustos`,gusto);
  }
}

