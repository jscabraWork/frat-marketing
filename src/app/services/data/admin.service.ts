import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Administrador } from 'src/app/models/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  crearAdministrador(administrador:Administrador){
    return this.http.post<any>(`${API_URL}/administradores`,administrador);
  }
}
