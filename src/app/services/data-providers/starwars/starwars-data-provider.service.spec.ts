import { TestBed, inject } from '@angular/core/testing';

import { StarwarsDataProviderService } from './starwars-data-provider.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoadingService } from '../../loading/loading.service';
import { MOCKED_STARSHIP, MOCKED_CONTAINER } from 'src/app/test/mock-store';
import { environment } from 'src/environments/environment';

describe('StarwarsDataProviderService', () => {
  let service: StarwarsDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: LoadingService }
      ]
    });
    service = TestBed.inject(StarwarsDataProviderService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects service to get correct URL from API',
    inject([HttpTestingController, StarwarsDataProviderService],
      (httpMock: HttpTestingController, service: StarwarsDataProviderService) => {
        service.getStarship(1).then(res => {
        });

        const req = httpMock.expectOne('https://swapi.dev/api/starships/1');
        expect(req.request.method).toEqual('GET');
        req.flush({ MOCKED_CONTAINER });
      }));


  it('expects service to get correct URL from API then wait then from cache',
    inject([HttpTestingController, StarwarsDataProviderService],
      async (httpMock: HttpTestingController, service: StarwarsDataProviderService) => {
        environment.cacheExpirationTime = 10000;

        service.getStarship(1).then(async res => {
          expect(res.name).toBe(MOCKED_STARSHIP.name)
        });

        await delay(3000);

        service.getStarship(1).then(res => {
          expect(res.name).toBe(MOCKED_STARSHIP.name)
        });

        let requests = httpMock.match('https://swapi.dev/api/starships/1');
        requests.map(req => req.flush({ ...MOCKED_STARSHIP }))
        expect(requests.length).toBe(1);
      }));

  it('expects service to get correct starship from API then wait cache expiration then from API',
    inject([HttpTestingController, StarwarsDataProviderService],
      async (httpMock: HttpTestingController, service: StarwarsDataProviderService) => {
        environment.cacheExpirationTime = 1000;
        service.getStarship(1).then(async res => {
          expect(res.name).toBe(MOCKED_STARSHIP.name)
        });

        await delay(4000);

        service.getStarship(1).then(res => {
          expect(res.name).toBe(MOCKED_STARSHIP.name)
        });

        let requests = httpMock.match('https://swapi.dev/api/starships/1');
        requests.map(req => req.flush({ ...MOCKED_STARSHIP }))
        expect(requests.length).toBe(2);
      }));

      function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
});