import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  constructor(private http:HttpClient) { }

  uploadLogoEmpresa(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL}/upload/logo/empresa/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }

  
  uploadLogoMarca(file:File, pId): Observable<HttpEvent<any>>{

    const formData: FormData= new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST',`${API_URL}/upload/logo/marca/${pId}`, formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(req);
  }
  getFiles(){
    return this.http.get(`${API_URL}/files`)
  }
}
