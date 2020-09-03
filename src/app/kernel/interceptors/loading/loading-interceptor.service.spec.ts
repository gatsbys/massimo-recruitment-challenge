import { TestBed } from '@angular/core/testing';

import { LoadingInterceptorService } from './loading-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingService } from 'src/app/services/loading/loading.service';

describe('LoadingInterceptorService', () => {
  let service: LoadingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: LoadingService}
      ]
    });
    service = TestBed.inject(LoadingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
