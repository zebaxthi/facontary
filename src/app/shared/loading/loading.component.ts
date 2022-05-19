import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../modules/login/services/login.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() cargando: any;

  constructor(private loginService:LoginService) { 
    //this.cargando = false;
    //xd
  }

  ngOnInit(): void {
    //this.loginService.cargando$.subscribe(val => this.cargando = val);
  }

}
