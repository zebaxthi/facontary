import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private loginService:LoginService, private messageService:MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    document.getElementById("button")!.hidden = true;
    const user = this.objetoUser(this.usuario, this.contrasena);
    this.loginService.login(user).subscribe(res => {
      if(res.data.token == ''){
        setTimeout(() =>{
          this.messageService.add({key: 'bc', severity:'error', summary:'Error', detail:'El usuario o la contraseña son incorrectos'});
        }, 1000);
      } else{
        this.loginService.setTokenLocalStorage(res.data.token);
        let dataUser: any = this.loginService.getDataUser();
        this.messageService.add({key: 'bc', severity:'success', summary:'Bienvenido/a', detail: dataUser.nombre});
        setTimeout(() =>{
          this.router.navigate(['home']);
        }, 1000);
      }
    }, error => {
      this.messageService.add({key: 'bc', severity:'error', summary:'Error', detail:'Hubo un eror, inténtalo de nuevo'});
    });
    document.getElementById("button")!.hidden = false;
  }

  objetoUser(usuario: string, contrasena: string){
    let position = usuario.indexOf('@');
    const user = {
      usuario: '',
      email: '',
      contrasena
    };
    position === -1 ? user.usuario = usuario : user.email = usuario;
    return user;
  }

}
