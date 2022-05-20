import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../modules/login/services/login.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  display: any;
  nombreUser: any;

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.nombreUser = this.loginService.getDataUser().nombre;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
