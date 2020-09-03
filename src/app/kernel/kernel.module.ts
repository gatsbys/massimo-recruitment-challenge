import { NgModule } from "@angular/core";
import { FatalErrorInterceptorService } from './interceptors/fatal-error/fatal-error-interceptor.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from '../kernel/interceptors/loading/loading-interceptor.service'

@NgModule({
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: FatalErrorInterceptorService, multi: true},
      { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true},]
  })
  export class KernelModule { }