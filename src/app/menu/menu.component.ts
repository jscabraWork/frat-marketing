import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logOut:boolean = false;
  constructor(
    private auth: AuthService,

  ) { }

  ngOnInit(): void {
    if(this.auth.usuario.id){
      this.logOut=true
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
