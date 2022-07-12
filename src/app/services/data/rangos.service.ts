import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RangosService {

  constructor(private http:HttpClient) { }


  getAllRangos(){
    return this.http.get<any>(`${API_URL}/rangos`);
  }
}
