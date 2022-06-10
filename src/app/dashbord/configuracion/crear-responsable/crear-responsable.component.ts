import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador.model';
import { AdminService } from 'src/app/services/data/admin.service';

@Component({
  selector: 'app-crear-responsable',
  templateUrl: './crear-responsable.component.html',
  styleUrls: ['./crear-responsable.component.css']
})
export class CrearResponsableComponent implements OnInit {

  constructor(private servicio:AdminService) { }
  administrador:Administrador ={
    id:0,
    nombre:"",
    correo:"",
    password:""

  }
  ngOnInit(): void {
    this.administrador=={
      id:0,
      nombre:"",
      correo:"",
      password:""
    }
  }
  saveAdministrador(){
    this.administrador.nombre=this.administrador.nombre.toUpperCase();
    this.servicio.crearAdministrador(this.administrador).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
  }
}
