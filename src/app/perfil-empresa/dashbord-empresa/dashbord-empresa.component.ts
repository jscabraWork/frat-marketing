import { Component, OnInit } from '@angular/core';
import { isThisSecond } from 'date-fns';
import { AuthService } from 'src/app/login/auth.service';
import { Campania } from 'src/app/models/campania.model';
import { Empresa } from 'src/app/models/empresa.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { EmpresaService } from 'src/app/services/data/empresa.service';

@Component({
  selector: 'app-dashbord-empresa',
  templateUrl: './dashbord-empresa.component.html',
  styleUrls: ['./dashbord-empresa.component.css']
})
export class DashbordEmpresaComponent implements OnInit {

  campanias:Campania[] = []
  empresa:Empresa
  numerosTareasterminadas:number[]
  numerosTareasNoterminadas:number[]
  alcances:number[]=[]
  impresiones:number[]=[]
  tiposCampania:TipoContenido[][]
  cantidadTerminadas:number[][]=[]
  cantidadSinTerminar:number[][]=[]
  cantidadesInfluencers:number[][]=[]
  categoriasInfluencers:string[][] = []

  constructor(
    private servicio: EmpresaService,   
     private auth: AuthService
     ) { }

  ngOnInit(): void {
    this.servicio.getPerfil(this.auth.usuario.id).subscribe(response=>{
      this.campanias = response.campanias
      this.empresa = response.empresa
      this.numerosTareasterminadas = response.numerosTareasterminadas
      this.numerosTareasNoterminadas = response.numerosTareasNoterminadas
      this.alcances = response.alcances
      this.impresiones = response.impresiones
      this.tiposCampania = response.tiposCampania
      this.cantidadTerminadas = response.cantidadTerminadas
      this.cantidadSinTerminar = response.cantidadSinTerminar
      this.cantidadesInfluencers = response.cantidadesInfluencers
      this.categoriasInfluencers = response.categoriasInfluencers
    })

  }

}
