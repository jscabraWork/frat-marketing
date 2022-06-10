import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/data/empresa.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private servicio:EmpresaService) { }
  empresa:Empresa ={
    id:0,
    nombre:"",
    correo:"",
    password:"",
    descripcion:""

  }
  ngOnInit(): void {
    this.empresa=={
      id:0,
      nombre:"",
      correo:"",
      password:"",
      descripcion:""
    }
  }
  saveEmpresa(){
    this.empresa.nombre=this.empresa.nombre.toUpperCase();
    this.servicio.crearEmpresa(this.empresa).subscribe(response=>{
      alert(response.mensaje)
      this.ngOnInit()
    },
    error=>{
      alert(error.error.mensaje)
    }
    )
  }
}
