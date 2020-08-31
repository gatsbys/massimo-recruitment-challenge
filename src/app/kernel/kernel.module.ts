import { NgModule } from "@angular/core";
import { JwtService } from "./jwt/jwt.service";
import { FatalErrorInterceptorService } from './interceptors/fatal-error/fatal-error-interceptor.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    providers: [
      JwtService, 
      { provide: HTTP_INTERCEPTORS, useClass: FatalErrorInterceptorService, multi: true},]
  })
  export class KernelModule { }