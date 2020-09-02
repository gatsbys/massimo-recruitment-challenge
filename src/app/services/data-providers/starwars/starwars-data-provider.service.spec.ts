import { TestBed } from '@angular/core/testing';

import { StarwarsDataProviderService } from './starwars-data-provider.service';

describe('StarwarsDataProviderService', () => {
  let service: StarwarsDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarwarsDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
