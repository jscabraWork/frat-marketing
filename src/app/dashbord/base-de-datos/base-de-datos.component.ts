import { Component, OnInit } from '@angular/core';
import { Influencer } from 'src/app/models/influencer.model';
import { InfluencerService } from 'src/app/services/data/influencer.service';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnInit {


  influencers:Influencer[]=[]
  ciudades:string[] =[]
  constructor(private servicioInfluencer:InfluencerService) { }

  ngOnInit(): void {
    this.influencers =[]
    this.ciudades=[]
    this.servicioInfluencer.getInfluencers().subscribe(
      (response)=>{
        this.influencers = response.influencers
        this.ciudades = response.ciudades
      }
    )
  }

  CalculateAge(date:Date): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(date);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
}
