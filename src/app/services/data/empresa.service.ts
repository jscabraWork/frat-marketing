import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Empresa } from 'src/app/models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http:HttpClient) { }

  crearEmpresa(empresa:Empresa){
    return this.http.post<any>(`${API_URL}/empresas`,empresa);
  }

  getAllEmpresa(){
    return this.http.get<any>(`${API_URL}/empresas`);
  }
}
