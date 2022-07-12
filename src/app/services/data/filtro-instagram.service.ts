import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class FiltroInstagramService {

  link:string = API_URL + '/instagram/filtro';
  constructor(private http:HttpClient) { }

  buscarPorNombre(pNombre:string){
    return this.http.get<any>(`${this.link}/${pNombre}`);
  }

  buscarPorSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}`);
  }

  buscarPorSeguidoresYCatgoria(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}`);
  }

  buscarPorSeguidoresYCatgoriaYGusto(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}`);
  }


  buscarPorSeguidoresYCatgoriaYGustoYPrecios(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}`);
  }

  buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidencia(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}`);
  }

  
  buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}`);
  }

  buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}`);
  }

  buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}`);
  }

  buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}`);
  }
  
  buscarPorSeguidoresYCatgoriaYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, categoriaContenido:string, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
    return this.http.get<any>(`${this.link}/${pMaximoSeguidores}/${pMinimoSeguidores}/${categoriaContenido}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
  }

  //parte 2


  buscarPorSeguidoresYGusto(pMaximoSeguidores:number,pMinimoSeguidores:number,  gustoNombre:string){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}`);
  }


  buscarPorSeguidoreYGustoYPrecios(pMaximoSeguidores:number,pMinimoSeguidores:number,  gustoNombre:string, precioMaximo:number, precioMinimo:number){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}/${precioMaximo}/${precioMinimo}`);
  }

  buscarPorSeguidoresYGustoYPreciosYCiudadResidencia(pMaximoSeguidores:number,pMinimoSeguidores:number,  gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}`);
  }

  
  buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}`);
  }

  buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number,  gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}`);
  }

  buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(pMaximoSeguidores:number,pMinimoSeguidores:number, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}`);
  }

  buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}/${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}`);
  }
  
  buscarPorSeguidoresYGustoYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, gustoNombre:string, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
    return this.http.get<any>(`${this.link}2/${pMaximoSeguidores}/${pMinimoSeguidores}${gustoNombre}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
  }

  //PARTE 3 //////////////


  buscarPorSeguidoreYPrecios(pMaximoSeguidores:number,pMinimoSeguidores:number,  precioMaximo:number, precioMinimo:number){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}`);
  }

  buscarPorSeguidoresYPreciosYCiudadResidencia(pMaximoSeguidores:number,pMinimoSeguidores:number,   precioMaximo:number, precioMinimo:number, ciudadResidencia:string){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}`);
  }

  
  buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,  precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}`);
  }

  buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number,  precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}`);
  }

  buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(pMaximoSeguidores:number,pMinimoSeguidores:number, precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}`);
  }

  buscarPorSeguidoresYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number,  precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}`);
  }
  
  buscarPorSeguidoreYPreciosYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,  precioMaximo:number, precioMinimo:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
    return this.http.get<any>(`${this.link}3/${pMaximoSeguidores}/${pMinimoSeguidores}/${precioMaximo}/${precioMinimo}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
  }


    //PARTE 4 //////////////



    buscarPorSeguidoresYCiudadResidencia(pMaximoSeguidores:number,pMinimoSeguidores:number,    ciudadResidencia:string){
      return this.http.get<any>(`${this.link}4/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadResidencia}`);
    }
  
    
    buscarPorSeguidoresYCiudadResidenciayCiudadSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,   ciudadResidencia:string, ciudadSeguidores:string){
      return this.http.get<any>(`${this.link}4/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadResidencia}/${ciudadSeguidores}`);
    }
  
    buscarPorSeguidoresYCiudadResidenciayCiudadSeguidoresYEdadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number,   ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string){
      return this.http.get<any>(`${this.link}4/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}`);
    }
  
    buscarPorSeguidoresYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRango(pMaximoSeguidores:number,pMinimoSeguidores:number, ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number){
      return this.http.get<any>(`${this.link}4/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}`);
    }
  
    buscarPorSeguidoresYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number,  ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string){
      return this.http.get<any>(`${this.link}4/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}`);
    }
    
    buscarPorSeguidoreYCiudadResidenciayCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,  ciudadResidencia:string, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
      return this.http.get<any>(`${this.link}4/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadResidencia}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
    }


    //PARTE 5////////////////

    
    buscarPorSeguidoresCiudadSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, ciudadSeguidores:string){
      return this.http.get<any>(`${this.link}5/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadSeguidores}`);
    }
  
    buscarPorSeguidoresyCiudadSeguidoresYEdadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number, ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string){
      return this.http.get<any>(`${this.link}5/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}`);
    }
  
    buscarPorSeguidoresyCiudadSeguidoresYEdadInfluencerYRango(pMaximoSeguidores:number,pMinimoSeguidores:number,  ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number){
      return this.http.get<any>(`${this.link}5/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}`);
    }
  
    buscarPorSeguidoresyCiudadSeguidoresYEdadInfluencerYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number,  ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string){
      return this.http.get<any>(`${this.link}5/${pMaximoSeguidores}/${pMinimoSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}`);
    }
    
    buscarPorSeguidoreyCiudadSeguidoresYEdadInfluencerYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,   ciudadSeguidores:string, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
      return this.http.get<any>(`${this.link}5/${pMaximoSeguidores}/${pMinimoSeguidores}/${ciudadSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
    }

    //PARTE 6 //////////////


    buscarPorSeguidoresYEdadInfluencer(pMaximoSeguidores:number,pMinimoSeguidores:number, fechaMaxima:string, fechaMinima:string){
      return this.http.get<any>(`${this.link}6/${pMaximoSeguidores}/${pMinimoSeguidores}/${fechaMaxima}/${fechaMinima}`);
    }
  
    buscarPorSeguidoresyYEdadInfluencerYRango(pMaximoSeguidores:number,pMinimoSeguidores:number, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number){
      return this.http.get<any>(`${this.link}6/${pMaximoSeguidores}/${pMinimoSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}`);
    }
  
    buscarPorSeguidoresYEdadInfluencerYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string){
      return this.http.get<any>(`${this.link}6/${pMaximoSeguidores}/${pMinimoSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}`);
    }
    
    buscarPorSeguidoreYEdadInfluencerYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, fechaMaxima:string, fechaMinima:string, idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
      return this.http.get<any>(`${this.link}6/${pMaximoSeguidores}/${pMinimoSeguidores}/${fechaMaxima}/${fechaMinima}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
    }

    //PARTE 7////

    buscarPorSeguidoresYRango(pMaximoSeguidores:number,pMinimoSeguidores:number,  idRango:number, porcentajeMinimo:number){
      return this.http.get<any>(`${this.link}7/${pMaximoSeguidores}/${pMinimoSeguidores}/${idRango}/${porcentajeMinimo}`);
    }
  
    buscarPorSeguidoresYRangoYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number, idRango:number, porcentajeMinimo:number, genero:string){
      return this.http.get<any>(`${this.link}7/${pMaximoSeguidores}/${pMinimoSeguidores}/${idRango}/${porcentajeMinimo}/${genero}`);
    }
    
    buscarPorSeguidoreYRangoYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,  idRango:number, porcentajeMinimo:number, genero:string, idGenero:number, porcentajeGeneroM:number){
      return this.http.get<any>(`${this.link}7/${pMaximoSeguidores}/${pMinimoSeguidores}/${idRango}/${porcentajeMinimo}/${genero}/${idGenero}/${porcentajeGeneroM}`);
    }
    //PARTE 8////

    buscarPorSeguidoresYGenero(pMaximoSeguidores:number,pMinimoSeguidores:number, genero:string){
      return this.http.get<any>(`${this.link}8/${pMaximoSeguidores}/${pMinimoSeguidores}/${genero}`);
    }
    
    buscarPorSeguidoreYGeneroYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number, genero:string, idGenero:number, porcentajeGeneroM:number){
      return this.http.get<any>(`${this.link}8/${pMaximoSeguidores}/${pMinimoSeguidores}/${genero}/${idGenero}/${porcentajeGeneroM}`);
    }

    //PARTE 9////////////////////////

    buscarPorSeguidoreYGeneroSeguidores(pMaximoSeguidores:number,pMinimoSeguidores:number,  idGenero:number, porcentajeGeneroM:number){
      return this.http.get<any>(`${this.link}9/${pMaximoSeguidores}/${pMinimoSeguidores}/${idGenero}/${porcentajeGeneroM}`);
    }
}
