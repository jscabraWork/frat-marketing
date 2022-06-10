import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Marca } from 'src/app/models/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http:HttpClient) { }

  crearMarca(marca:Marca,pIdEmpresa:number,pIdSector:number){
    return this.http.post<any>(`${API_URL}/marcas/${pIdEmpresa}/${pIdSector}`,marca);
  }
}
