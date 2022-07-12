import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router
    ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.auth.isAuthenticated()){
        this.router.navigate(['/login'])
        return false;
        console.log('ACA')
        }

      let role = route.data['role'] as string

      if(this.auth.hasRole(role)){
        return true;
      }
    this.router.navigate(['/login'])
    alert(`Hola ${this.auth.usuario.correo} no tienes acceso a esta acción`);
    return false;
    
  }
  
}
