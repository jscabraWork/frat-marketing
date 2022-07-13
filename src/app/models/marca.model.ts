import { Imagen } from "./imagen.model";

export interface Marca{
    id:number;
    razonSocial:string;
	nit:string;
	contacto:string;
	cargo_contacto:string;
	telefono:string;
	correo:string;
	descripcion:string;
	 facturacion:number;
	 contactoOtro:string;
	 cargo_contactoOtro:string;
	 telefonoOtro:string;
	 correoOtro:string;
	 logo:Imagen;
}