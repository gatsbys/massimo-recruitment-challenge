import { TestBed } from '@angular/core/testing';

import { StarshipDetailService } from './starship-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarwarsDataProviderService } from '../data-providers/starwars/starwars-data-provider.service';

describe('StarshipDetailService', () => {
  let service: StarshipDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StarwarsDataProviderService}
      ]
    });
    service = TestBed.inject(StarshipDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
