import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Campania } from 'src/app/models/campania.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Metrica } from 'src/app/models/metrica.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { InfluencerService } from 'src/app/services/data/influencer.service';

@Component({
  selector: 'app-dashbord-influencer',
  templateUrl: './dashbord-influencer.component.html',
  styleUrls: ['./dashbord-influencer.component.css']
})
export class DashbordInfluencerComponent implements OnInit {

  influencer:Influencer
  campanias:Campania[] = []
  cantidadNo:number[]=[]
  cantidadSi:number[]=[]
  tipoContenidos:TipoContenido[]
  metricas:Metrica[][] = []
  cantidadesPorTipo: number[][]
  sumasporTipo:number[][]
  totalTerminadas:number
  totalNoTerminadas:number

  constructor(
    private auth: AuthService,
    private servicio: InfluencerService
    ) {}
  ngOnInit(): void {
    this.influencer= new Influencer();
    this.campanias=[]
    this.cantidadNo=[]
    this.cantidadSi=[]
    if(this.auth.isAuthenticated()){
      var date = new Date();
      let fechaInicial = new Date();;
      fechaInicial.setDate(1)
      let fechaFinal = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  


      let fechaMax=(fechaFinal.getFullYear()+'-'+(fechaFinal.getMonth()+1)+'-'+fechaFinal.getDate())
   
      let fechaMin=(fechaInicial.getFullYear()+'-'+(fechaInicial.getMonth()+1)+'-'+fechaInicial.getDate())

        this.servicio.getInfluencerPorId(this.auth.usuario.id, fechaMin,fechaMax).subscribe(response=>{

          this.tipoContenidos = response.tipoContenidos
          this.influencer = response.influencer
          this.campanias = response.campanias
          this.cantidadNo = response.cantidadNo
          this.cantidadSi = response.cantidadSi
          this.metricas = response.metricas
          this.cantidadesPorTipo = response.cantidadesPorTipo
          this.sumasporTipo = response.sumasporTipo
          this.totalTerminadas = response.totalTerminadas
          this.totalNoTerminadas = response.totalNoTerminadas
          console.log(response)
        })
      
    }
  }

}
