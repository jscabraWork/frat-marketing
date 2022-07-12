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
        this.servicio.getInfluencerPorId(this.auth.usuario.id).subscribe(response=>{

          this.tipoContenidos = response.tipoContenidos
          this.influencer = response.influencer
          this.campanias = response.campanias
          this.cantidadNo = response.cantidadNo
          this.cantidadSi = response.cantidadSi
          this.metricas = response.metricas
        })
      
    }
  }

}
