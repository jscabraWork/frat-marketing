import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class FiltroInstagramService {

  link:string = API_URL + '/instagram/filtro';
  constructor(private http:HttpClient) { }

  buscarPorLimiteDeSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}`);
  }

  buscarPorLimiteDeSeguidoresCategoria(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}`);
  }
  buscarPorLimiteDeSeguidoresCategoriaTipoContenido(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGusto(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}`);
  }
  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimo(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximo(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}`);
  }
  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}`);
  }
  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagram(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaxima(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string,fechaMaxima:Date){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}/${fechaMaxima}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinima(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string,fechaMaxima:Date,fechaMinima:Date){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}/${fechaMaxima}/${fechaMinima}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaxima(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string,fechaMaxima:Date,fechaMinima:Date,edadMaxima:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}/${fechaMaxima}/${fechaMinima}/${edadMaxima}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaximaEdadMinima(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string,fechaMaxima:Date,fechaMinima:Date,edadMaxima:number,edadMinima:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}/${fechaMaxima}/${fechaMinima}/${edadMaxima}/${edadMinima}`);
  }

  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaximaEdadMinimaGenero(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string,fechaMaxima:Date,fechaMinima:Date,edadMaxima:number,edadMinima:number, genero:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}/${fechaMaxima}/${fechaMinima}/${edadMaxima}/${edadMinima}/${genero}`);
  }
  buscarPorLimiteDeSeguidoresCategoriaTipoContenidoGustoPrecioMinimoPrecioMaximoCiudadInfluencerCiudadInstagramFechaMaximaFechaMinimaEdadMaximaEdadMinimaGeneroGeneroInstagram(pMaximoSeguidores:number,pMinimoSeguidores:number,nombreContenido:string,tipoContenido:string, nombreGusto:string,precioMinimo:number,precioMaximo:number, ciudadInfluencer:string,ciudadInstagram:string,fechaMaxima:string,fechaMinima:string,edadMaxima:number,edadMinima:number, genero:string,generoIG:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${nombreContenido}/${tipoContenido}/${nombreGusto}/${precioMinimo}/${precioMaximo}/${ciudadInfluencer}/${ciudadInstagram}/${fechaMaxima}/${fechaMinima}/${edadMaxima}/${edadMinima}/${genero}/${generoIG}`);
  }
}
