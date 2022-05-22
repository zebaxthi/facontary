import { Injectable } from '@angular/core';
import { LoginService } from '../../modules/login/services/login.service';
import { catchError, map, Observable } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
//"clase encargada de interceptar las peticiones http y inyectar el token"
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const token = this.loginService.getTokenLocalStorage();
    if (token) {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Credentials": "true",
          'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
          "Accept": "application/json;charset=utf-8",

          token: `${token}`,
        }
      });
      console.log("el request es : ",request);
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<unknown>) => {
        if(event instanceof HttpResponse){
          var nuevoBody: any;
          if (typeof event.body === 'string' || event.body instanceof String){
            nuevoBody = event.body.replace(/\0/g, '');
          }
          event = event.clone({body: nuevoBody});
        }
        return event;
      })
    );
  }
}