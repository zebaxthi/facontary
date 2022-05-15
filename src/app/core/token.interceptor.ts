import { Injectable } from '@angular/core';
import { LoginService } from '../modules/login/services/login.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

@Injectable()
//"clase encargada de interceptar las peticiones http y inyectar el token"
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storageService: LoginService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Credentials": "true",
          'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
          "Accept": "application/json;charset=utf-8",
        }
      });
      console.log("el request es : ",request);
    return next.handle(request).map((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse){
        if (typeof event.body === 'string' || event.body instanceof String){
          var nuevoBody = event.body.replace(/\0/g, '');
        }
        event = event.clone({body: nuevoBody});
      }
      return event;
    })
    .catch((err: any, caught) => {
      if (err instanceof HttpErrorResponse) {
        return Observable.throw(err);
      }
    });;
  }
}