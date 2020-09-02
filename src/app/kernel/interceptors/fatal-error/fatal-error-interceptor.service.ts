import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FatalErrorInterceptorService implements HttpInterceptor {

  constructor(private router : Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next
    .handle(req)
    .pipe(catchError(this.handleError));
  }

  handleError(error : HttpErrorResponse){
    if (error.status !== 401) {
      console.log(error);
      this.router.navigate(['error']);
    }

    return throwError(error);
  }
}
