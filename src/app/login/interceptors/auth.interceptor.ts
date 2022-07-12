import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "../auth.service";
import{catchError} from 'rxjs/operators'
import{ throwError}from'rxjs'
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService,private router:Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        return next.handle(req).pipe(
            catchError(e=>{
              
                if(e.status ==401){

                    if(this.auth.isAuthenticated()){
                      this.auth.logout();
                    }
              
                    this.router.navigate(['/login'])
                    
                  }
                 else if(e.status ==403){
                    this.router.navigate(['/clientes'])
                    alert(`Hola ${this.auth.usuario.correo} no tienes acceso a esta acción`);
             
                  }
               
                  return throwError(e);
            
            })
            
        );
    }
}