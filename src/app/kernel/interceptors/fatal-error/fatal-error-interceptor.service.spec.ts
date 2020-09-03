import { TestBed } from '@angular/core/testing';

import { FatalErrorInterceptorService } from './fatal-error-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('FatalErrorInterceptorService', () => {
  let service: FatalErrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
       
      ]
    });
    service = TestBed.inject(FatalErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
