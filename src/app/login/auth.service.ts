import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario:Usuario;
  private _token:string;

  constructor(private http: HttpClient, private router: Router) { }

  public get usuario():Usuario{
    if(this._usuario!=null){
      return this._usuario;
    }
    else if(this._usuario==null && sessionStorage.getItem('admin')!=null){
      this._usuario= JSON.parse(sessionStorage.getItem('admin')) as Usuario;
      return this._usuario;
    }
    else if(this._usuario==null && sessionStorage.getItem('empresa')!=null){
      this._usuario= JSON.parse(sessionStorage.getItem('empresa')) as Usuario;
      return this._usuario;
    }
    else if(this._usuario==null && sessionStorage.getItem('influencer')!=null){
      this._usuario= JSON.parse(sessionStorage.getItem('influencer')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token():string{
    if(this._token!=null){
    return this._token;
    }
    else if(this._token==null && sessionStorage.getItem('token')!=null){
      this._token= sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(usuario:Usuario):Observable<any> {
    const urlEndPoint= API_URL+'/oauth/token';
    const credenciales = btoa('frat.marketing'+':'+'FRATM12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':'Basic '+credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username',usuario.correo);
    params.set('password',usuario.password);

    return this.http.post<any>(urlEndPoint,params.toString(),{headers:httpHeaders});
  }
  guardarUsuario(accessToken:string):void{
    let objeto=this.obtenerDatosDelTocken(accessToken);
    this._usuario = new Usuario();
    console.log(objeto.id)
    this._usuario.nombre= objeto.nombre;
    this._usuario.id= objeto.id;
    this._usuario.correo= objeto.correo;
    this._usuario.roles= objeto.authorities;  
 
    let tipo = '';
    let encontro = false
    for(let i =0;i < this._usuario.roles.length && !encontro;i++){
      if(this._usuario.roles[i]=='ROLE_ADMIN'){
        this.router.navigate(['/home']);
        tipo='admin'
        encontro=true
      }
      else if(this._usuario.roles[i]=='ROLE_INFLUENCER'){
        this.router.navigate(['/influencer']);
        tipo='influencer'
        encontro=true
      }
      else if(this._usuario.roles[i]=='ROLE_EMPRESA'){
        this.router.navigate(['/empresa']);
        tipo='empresa'
        encontro=true
      }
    }

      sessionStorage.setItem(tipo,JSON.stringify(this._usuario)); 
    
   

    

  }
  guardarToken(accessToken:string):void{
    this._token = accessToken;
    sessionStorage.setItem('token',accessToken);

  }
  obtenerDatosDelTocken(accessToken:string):any{
    
    if(accessToken!=null){
      return JSON.parse(atob(accessToken.split(".")[1]));;
    }
    else{
      return null;
    }
  }
  isAuthenticated():boolean{
    let payload= this.obtenerDatosDelTocken(this.token);
    
    if(payload!=null && payload.user_name && payload.user_name.length>0){
      
      return true;
      
    }
    return false;
  }

  hasRole(role:string):boolean{

  
    if(this.usuario.roles!=undefined&&this.usuario.roles.length>0&&this.usuario.roles.includes(role)){
      return true;
    }
    return false;
  }

  logout():void{
    this._token= null;
    this._usuario= null;
    
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('influencer');
    sessionStorage.removeItem('empresa');
    this.router.navigate(['/login']);
  }

}
