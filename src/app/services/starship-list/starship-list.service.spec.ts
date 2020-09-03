import { TestBed } from '@angular/core/testing';

import { StarshipListService } from './starship-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarwarsDataProviderService } from '../data-providers/starwars/starwars-data-provider.service';

describe('StarshipListService', () => {
  let service: StarshipListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StarwarsDataProviderService}
      ]
    });
    service = TestBed.inject(StarshipListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
