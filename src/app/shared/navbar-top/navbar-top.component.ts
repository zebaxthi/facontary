import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../../modules/login/services/login.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  display: any;
  nombreUser: any;
  items: MenuItem[] = [];

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.nombreUser = this.loginService.getDataUser().nombre;
    this.items = [
      {
        label: 'Buzón de entrada',
        icon: 'pi pi-fw pi-inbox',
      },
      {
        label: 'Notificaciones',
        icon: 'pi pi-fw pi-bell',
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-sign-out',
        command:()=>{this.logout()}
      },
    ];
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
