import { Injectable } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  pendingRequests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pendingRequests.push(req);
    this.loadingService.showLoading.next(true);

    return next
      .handle(req)
      .pipe(
        filter((event) => event instanceof HttpResponse),
        finalize(() => this.dequeue(req))
      );
  }

  dequeue(req: HttpRequest<any>) {
    const requestIndex = this.pendingRequests.indexOf(req);
    this.pendingRequests.splice(requestIndex, 1);
    this.loadingService.showLoading.next(this.pendingRequests.length > 0);
  }
}
