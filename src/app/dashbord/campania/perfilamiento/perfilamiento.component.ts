import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Campania } from 'src/app/models/campania.model';
import { CrearTareas } from 'src/app/models/creacionTareas.model';
import { Influencer } from 'src/app/models/influencer.model';
import { Precio } from 'src/app/models/precio.model';
import { TipoContenido } from 'src/app/models/tipoContenido.model';
import { CampaniaService } from 'src/app/services/data/campania.service';
import { InfluencerService } from 'src/app/services/data/influencer.service';
import { TareasService } from 'src/app/services/data/tareas.service';
import { FiltrarComponent } from './filtrar/filtrar.component';
@Component({
  selector: 'app-perfilamiento',
  templateUrl: './perfilamiento.component.html',
  styleUrls: ['./perfilamiento.component.css']
})
export class PerfilamientoComponent implements OnInit {

  fee:number=1
  campanias: Campania[] = []
  redSocial: string = ""
  influencers: Influencer[] = []
  influencersAgregados: Influencer[] = []
  ciudades: string[] = []
  ciudadesAgregadas: string[] = []
  precios: Precio[][] = []
  preciosAgregados: Precio[][] = []
  numeros: number[][] 
  retenciones: number[] = []
  idCampania:number=0
  constructor(public dialog: MatDialog, private servicioCampania: CampaniaService, private servicioInfluencer: InfluencerService, private tareasService:TareasService) { }

  ngOnInit(): void {
    
    this.fee=1
    this.ciudades=[]
    this.ciudadesAgregadas =[]
    this.precios=[]
    this.preciosAgregados=[]
    this.idCampania=0
    this.retenciones=[]
    this.numeros =[]
    this.influencers = []
    this.influencersAgregados=[]
    this.campanias = []
    this.redSocial = ""

    this.servicioCampania.getAllCampanias().subscribe(
      (response) => {
        this.campanias = response.campanias
      })
  }

  cambiar(){
    let termino = false;
    for(let i = 0; i < this.campanias.length &&!termino; i++){
      if(this.idCampania == this.campanias[i].id){
        this.redSocial = this.campanias[i].redSocial
        termino = true;

      }
    }
  }

  seleccionar(i: number) {

    let encontro = false;
    for(let j =0;j < this.influencersAgregados.length &&!encontro;j++){
      if(this.influencersAgregados[j].id==this.influencers[i].id){
        encontro =true;
      }
    }

  if(!encontro){
    this.influencersAgregados.push(this.influencers[i]);
    this.ciudadesAgregadas.push(this.ciudades[i]);
    this.preciosAgregados.push(this.precios[i]);
    let actual: number[] = []

    for (let j = 0; j < this.precios[i].length; j++) {
      actual.push(0)
    }
    
    this.retenciones.push(0)
    this.numeros.push(actual)

  }
    this.influencers.splice(i, 1);
    this.ciudades.splice(i, 1);
    this.precios.splice(i, 1);
    if(encontro){
      alert("Ya se agrego este influencer por lo cual fue eliminado del filtro")
    }

  }

  cambiarNumero(i,j,numero){
    this.numeros[i][j]=numero
  }
  openDialog(): void {
    if (this.redSocial != "") {
      const dialogRef = this.dialog.open(FiltrarComponent, {
        width: '1000px',
        height:'90%',
        data: {
          red: this.redSocial
        }
      });

      dialogRef.afterClosed().subscribe(result => {
  
        this.influencers = result.influencers
        this.ciudades = result.ciudades
        this.precios = result.precios
        let tipos: TipoContenido[] = result.tipos


        let contador = 0
        for (let i = 0; i < this.precios.length; i++) {
          let j = 0 + contador;

          for (let k = 0; k < this.precios[i].length; k++) {
            this.precios[i][k].tipoContenido = tipos[j]

            contador++;
            j++;

          }

        }
      });
    }
    else {
      alert("Seleccione una campaña")
    }
  }

  masN(i,j){
    this.numeros[i][j] =this.numeros[i][j]+1
  }
  menosN(i,j){
    if(this.numeros[i][j]>0){
    this.numeros[i][j] =this.numeros[i][j]-1
    }
  }
  darImpresiones(precios: Precio[], seguidores: number) {
    let impresiones = 0;
    for (let i = 0; i < precios.length; i++) {
      if (precios[i].tipoContenido.redSocial == this.redSocial) {
        impresiones += ((precios[i].alcance * seguidores) / 100)
      }

    }
    impresiones = impresiones * 1.02;
    return impresiones;
  }
  darAlcanteTotal(precios: Precio[], seguidores: number, i: number) {
    let alcance = 0;
    for (let j = 0; j < precios.length; j++) {

      alcance += ((precios[j].alcance * seguidores) / 100) * this.numeros[i][j]
    }
    return alcance;
  }

  darAlcanteTotalPre(precios: Precio, i: number) {
    let alcance = 0;
    let seguidores = 0;
    if (this.redSocial == 'Instagram') {
      seguidores = this.influencers[i].seguidoresInstagram
    }
    else {
      seguidores = this.influencers[i].seguidoresTikTok
    }

    alcance += ((precios.alcance * seguidores) / 100)

    return alcance;
  }

  darAlcanteTotalCampanaIg() {
    let alcance = 0;
  for(let i=0; i< this.preciosAgregados.length; i++){
    let precios = this.preciosAgregados[i]
    for (let j = 0; j < precios.length; j++) {

      alcance += ((precios[j].alcance * this.influencersAgregados[i].seguidoresInstagram) / 100) * this.numeros[i][j]
    }
  }
    return alcance;
  }

  darAlcanteTotalCampanaTikTok( ) {
    let alcance = 0;
  for(let i=0; i< this.preciosAgregados.length; i++){
    let precios = this.preciosAgregados[i]
    for (let j = 0; j < precios.length; j++) {

      alcance += ((precios[j].alcance * this.influencersAgregados[i].seguidoresTikTok) / 100) * this.numeros[i][j]
    }
  }
    return alcance;
  }
  darAcciones(){
    let acciones=0;
    for(let i =0; i < this.numeros.length; i++){
      for(let j=0; j < this.numeros[i].length;j++){
        acciones+= this.numeros[i][j]
      }
    }
    return acciones;
  }
  darCosto(precios: Precio[], i: number) {
    let costo = 0;
    for (let j = 0; j < precios.length; j++) {

      costo += precios[j].precio * this.numeros[i][j]
    }
    return costo;
  }

  darCostoTotal( ) {


    let costo = 0;
  for(let i=0;i < this.preciosAgregados.length;i++){
    let precios = this.preciosAgregados[i];
      for (let j = 0; j < precios.length; j++) {

        costo += precios[j].precio * this.numeros[i][j] * this.retenciones[i]
      }
  }
    return costo;
  }



  darCiudades() {
    let textos: String[] = []
    let numero: number[] = []
    for (let i = 0; i < this.ciudadesAgregadas.length; i++) {
      let encontro = false;
      let posicion = 0;
      for (let j = 0; j < textos.length && !encontro; j++) {
        if (this.ciudadesAgregadas[i] == textos[j]) {
          encontro = true;
          posicion = j
        }
      }
      if (!encontro) {
        textos.push(this.ciudadesAgregadas[i])
        numero.push(1)
      }
      else {
        numero[posicion] = numero[posicion] + 1;
      }

    }
    for (let i = 0; i < textos.length; i++) {
      textos[i] = numero[i] + ' ' + textos[i]
    }
    return textos;
  }

  darSeguidoresTotalIG(){
    let seguidores=0
    for(let i = 0; i < this.influencersAgregados.length; i++) {
      seguidores += this.influencersAgregados[i].seguidoresInstagram
    }
    return seguidores;
  }

  darSeguidoresTotalTikTok(){
    let seguidores=0
    for(let i = 0; i < this.influencersAgregados.length; i++) {
      seguidores += this.influencersAgregados[i].seguidoresTikTok
    }
    return seguidores;
  }

  darInfluencerIG() {
    let nano: number = 0
    let micro: number = 0
    let microtop: number = 0
    let influencer: number = 0
    let influencertop: number = 0
    let influencermacro: number = 0
    for (let i = 0; i < this.influencersAgregados.length; i++) {

        if (this.influencersAgregados[i].seguidoresInstagram <= 9999) {
          nano++;
        }
        else if (this.influencersAgregados[i].seguidoresInstagram <= 49999) {
          micro++;
        }
        else if (this.influencersAgregados[i].seguidoresInstagram <= 99999) {
          microtop++;
        }
        else if (this.influencersAgregados[i].seguidoresInstagram <= 499999) {
          influencer++;
        }
        else if (this.influencersAgregados[i].seguidoresInstagram <= 999999) {
          influencertop++;
        }
        else if (this.influencersAgregados[i].seguidoresInstagram >= 1000000) {
          influencermacro++;
        }    
    }
    let info: String[] = []
    info.push(nano + ' ' + 'Nanoinfluencer')
    info.push(micro + ' ' + 'Microinfluencer')
    info.push(microtop + ' ' + 'Top microinfluencer')
    info.push(influencer + ' ' + 'Influencer')
    info.push(influencertop + ' ' + 'Top influencer')
    info.push(influencermacro + ' ' + 'Macroinfluencer')
    return info;
  }

  
  darInfluencerTikTok() {
    let nano: number = 0
    let micro: number = 0
    let microtop: number = 0
    let influencer: number = 0
    let influencertop: number = 0
    let influencermacro: number = 0
    for (let i = 0; i < this.influencersAgregados.length; i++) {     
    
        if (this.influencersAgregados[i].seguidoresTikTok <= 9999) {
          nano++;
        }
        else if (this.influencersAgregados[i].seguidoresTikTok <= 49999) {
          micro++;
        }
        else if (this.influencersAgregados[i].seguidoresTikTok <= 99999) {
          microtop++;
        }
        else if (this.influencersAgregados[i].seguidoresTikTok <= 499999) {
          influencer++;
        }
        else if (this.influencersAgregados[i].seguidoresTikTok <= 999999) {
          influencertop++;
        }
        else if (this.influencersAgregados[i].seguidoresTikTok >= 1000000) {
          influencermacro++;
        }
      
    }
    let info: String[] = []
    info.push(nano + ' ' + 'Nanoinfluencer')
    info.push(micro + ' ' + 'Microinfluencer')
    info.push(microtop + ' ' + 'Top microinfluencer')
    info.push(influencer + ' ' + 'Influencer')
    info.push(influencertop + ' ' + 'Top influencer')
    info.push(influencermacro + ' ' + 'Macroinfluencer')
    return info;
  }

  crearTareas(){

    let encontro =false
    let posicion = 0

  
    for(let k =0; k < this.retenciones.length &&!encontro;k++){
      console.log(this.retenciones[k])
      if(this.retenciones[k]==-1){
        encontro = true;
        posicion = k
      }
    }
    console.log(encontro)
    if(!encontro){
    let creacionTareas = {
      influencers:this.influencersAgregados,
      numeros:this.numeros,
      retenciones:this.retenciones
    }
  
    this.tareasService.crearTareasDeCampania(this.idCampania, creacionTareas).subscribe(response=>{
      response
      alert("Tareas creadas exitosamente!")
      this.ngOnInit()
    })
  }
  else{
    alert("Revisa las retenciones del influencer numero "+posicion)
  }
}
}
