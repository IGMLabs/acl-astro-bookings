import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private router: Router ) {}

  public intercept(
    // la request recibe un evento(HttpRequest) de una cosa (unknown)
    request: HttpRequest<unknown>,
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

    return next
      .handle(request)
      .pipe(catchError((error)=> this.handleError(error)));
      }


  private handleError(error: any): Observable<any> {
    const httpError = error as HttpErrorResponse;
    if(httpError) {
      if(httpError.status === 401 || httpError.status === 403) {
        // El 401 es que no hay permisos, faltaria loguear
        console.log('Security Error');
        this.router.navigate(['/','auth','login'])
      } else {
        // error 0 es que el api no existe
        if(httpError.status === 0 ||httpError.status >= 500 ) {
          console.log('Server error');
        } else {
          console.log('User error');
        }
      }
    } else {
      console.log('Aplication error');
    }
    return throwError(()=> error );
  }

}
