import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Gusto } from 'src/app/models/gusto.model';
import { Mascotas } from 'src/app/models/mascota.model';
import { Ocupacion } from 'src/app/models/ocupacion.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { CiudadesService } from 'src/app/services/data/ciudades.service';
import { GustosService } from 'src/app/services/data/gustos.service';
import { InfluencerService } from 'src/app/services/data/influencer.service';
import { MascotasService } from 'src/app/services/data/mascotas.service';
import { OcupacionService } from 'src/app/services/data/ocupacion.service';
import { TipoContenidoService } from 'src/app/services/data/tipo-contenido.service';

@Component({
  selector: 'app-crear-influencer',
  templateUrl: './crear-influencer.component.html',
  styleUrls: ['./crear-influencer.component.css']
})
export class CrearInfluencerComponent implements OnInit {

  ciudadid:number=0
  tipoContenidosElegidos:TipoContenido[]=[]
  gustosElegidos:Gusto[]=[]
  mascotasElegidos:Mascotas[]=[]
  ocupacionElegidos:Ocupacion[]=[]


  ciudades:Ciudad[]=[]
  tipoContenidos:TipoContenido[]=[]
  gustos:Gusto[]=[]
  mascotas:Mascotas[]=[]
  ocupacion:Ocupacion[]=[]
  constructor(
    private servicioCiudades: CiudadesService,
    private servicioTipoContenido: TipoContenidoService,
    private servicioGustos: GustosService,
    private servicioOcupacion: OcupacionService,
    private servicioMascota: MascotasService,
    private servicioInfluencer: InfluencerService

  ) { }

  ngOnInit(): void {
    this.ciudadid =0
    this.ciudades=[]
    this.tipoContenidos=[]
    this.gustos=[]
    this.mascotas=[]
    this.ocupacion=[]

    this.tipoContenidosElegidos=[]
    this.gustosElegidos=[]
    this.mascotasElegidos=[]
    this.ocupacionElegidos=[]

    this.servicioCiudades.getAllCiudades().subscribe(
      response=>{
        this.ciudades=response.ciudades
      }
    )
    this.servicioTipoContenido.getAllTipoContenido().subscribe(
      response=>{
        this.tipoContenidos=response.tipoContenidos
      }
    )
    this.servicioGustos.getAllGustos().subscribe(
      response=>{
        this.gustos=response.gustos
      }
    )
    this.servicioMascota.getAllMascotas().subscribe(
      response=>{
        this.mascotas=response.mascotas
      }
    )
    this.servicioOcupacion.getAllOcupaciones().subscribe(
      response=>{
        this.ocupacion=response.ocupacion
      }
    )
  }

}
