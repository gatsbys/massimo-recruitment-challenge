import { TestBed } from '@angular/core/testing';

import { StarshipListService } from './starship-list.service';

describe('StarshipListService', () => {
  let service: StarshipListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
