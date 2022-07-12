import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  titulo:string
  usuario:Usuario
  constructor(private auth: AuthService) {
    this.usuario = new Usuario();
  
   }

  ngOnInit(): void {
    this.titulo = 'Login'
    if(this.auth.isAuthenticated()){
      alert( `Hola ${this.auth.usuario.nombre}, ya estas autenticado`);
      
    }
  }
  login():void {
    
    if(this.usuario.correo==null || this.usuario.password==null){
      alert( 'Username o Password vacios');
      return;
    }
    
    this.auth.login(this.usuario).subscribe(response => {

      this.auth.guardarUsuario(response.access_token);
      this.auth.guardarToken(response.access_token);
      
      let usuario = this.auth.usuario;
  

      alert( `Hola ${usuario.nombre}, has iniciado sesion con exito`);
  },
  error => {
    if(error.status == 400){
      alert('Usuario o clave incorrectos');
    }
  }
  );

}
}
