import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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
    this.addHeaders();
    const url = `${this.urlFacontaryFunctions}/login`;
    return this.http.post(
      url,
      dataUser,
      {
        headers: this.headers,
        responseType: 'text',
        //params: { code: 'kp40UJeeeBLJzRAimgl75zOvY2xVpDt/N9DDiMCRl9w1DpG/jq9D1w==' },
      }
    ).pipe(map(res => JSON.parse(res)));
  }
  
  addHeaders(){
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append("Access-Control-Allow-Credentials", "true");
    this.headers = this.headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    this.headers = this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    this.headers = this.headers.append("Accept", "application/json;charset=utf-8");
  }
}
