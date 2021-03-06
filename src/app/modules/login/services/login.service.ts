import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers?: HttpHeaders;
  private urlFacontaryFunctions = '';

  constructor(public http: HttpClient) { 
    this.urlFacontaryFunctions = environment.facontaryFunctions;
  }

  public login(dataUser: any){
    // this.addHeaders();
    const url = `${this.urlFacontaryFunctions}/login`;
    return this.http.post(
      url,
      dataUser,
      {
        responseType: 'text',
        params: { code: 'XknY505friDBHOmKe04EYhTeLWjevp5ylFVRG0uDcwUGAzFuWXe3gg==' },
      }
    ).pipe(map(res => JSON.parse(res)));
  }
  
  // addHeaders(){
  //   this.headers = new HttpHeaders();
  //   this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
  //   this.headers = this.headers.append("Access-Control-Allow-Credentials", "true");
  //   this.headers = this.headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //   this.headers = this.headers.append('Content-Type', 'application/json; charset=utf-8');
  //   this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  //   this.headers = this.headers.append("Accept", "application/json;charset=utf-8");
  // }

  setTokenLocalStorage(token: string){
    localStorage.setItem("token", token);
  }

  getTokenLocalStorage(){
    return localStorage.getItem("token");
  }

  getDataUser(){
    let token: any = localStorage.getItem('token') == null ? null : localStorage.getItem('token');
    let userData: any = token == null || token.length < 35? null : jwtDecode(token);
    return userData;
  }
}
