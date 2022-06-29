import { Component, OnInit } from '@angular/core';
import { Campania } from 'src/app/models/campania.model';
import { CampaniaService } from 'src/app/services/data/campania.service';

@Component({
  selector: 'app-campanias-activas',
  templateUrl: './campanias-activas.component.html',
  styleUrls: ['./campanias-activas.component.css']
})
export class CampaniasActivasComponent implements OnInit {

  campanias:Campania[]=[]
  constructor( private servicioCampania: CampaniaService) { }

  ngOnInit(): void {
    this.campanias =[]
    this.servicioCampania.getAllCampanias().subscribe(
      (response) => {
        this.campanias = response.campanias
      })
  }


}
