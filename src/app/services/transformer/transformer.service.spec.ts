import { TestBed } from '@angular/core/testing';

import { TransformerService } from './transformer.service';
import { MOCKED_FILM, MOCKED_STARSHIP, MOCKED_URL } from 'src/app/test/mock-store';

describe('TransformerService', () => {
  let service: TransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('given correct input film should enrich model', () => {
    const model = {...MOCKED_FILM};
    service.enrichFilm(model);
    expect(model.id).toBe("1");
  })

  it('given correct input ship should enrich model', () => {
    const model = {...MOCKED_STARSHIP};
    service.enrichStarship(model);
    expect(model.id).toBe("1");
  })

  it('given correct input URL format should extract correct id', () => {
    const response = service.extractId(MOCKED_URL);
    expect(response).toBe(1);
  })
});
