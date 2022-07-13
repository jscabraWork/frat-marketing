import { Imagen } from "./imagen.model";

export class Empresa{
    id:number;
    nombre:string;
    correo:string;
    password:string;
    descripcion:string;
    logo:Imagen;
}