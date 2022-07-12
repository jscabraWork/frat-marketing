import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MetricaService {
  constructor(private http:HttpClient) { }

  getAllMetricas(){
    return this.http.get<any>(`${API_URL}/metricas`);
  }
}
