import { TestBed } from '@angular/core/testing';

import { FatalErrorInterceptorService } from './fatal-error-interceptor.service';

describe('FatalErrorInterceptorService', () => {
  let service: FatalErrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatalErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
