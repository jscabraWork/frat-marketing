import { TipoContenido } from "./tipoContenido.model";

export interface Precio{
    
    id:number;
    precio:number;
    tipoContenido:TipoContenido;
    alcance:number
}