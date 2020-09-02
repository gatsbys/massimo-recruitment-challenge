import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StarshipListContainer } from 'src/app/common/models/starship-list-container.model';
import { Starship } from 'src/app/common/models/starship.model';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/common/models/film.model';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsDataProviderService {

  private pages$: Observable<StarshipListContainer>[] = [];
  private starships$: Observable<Starship>[] = [];
  private films$: Observable<Film>[] = [];

  apiHasNoMoreResults = false;

  constructor(private httpClient: HttpClient) { }

  public getPage(page: number) : Promise<StarshipListContainer> {
    if (!this.pages$[page - 1]) {
      this.pages$[page - 1] = this.httpClient
        .get<StarshipListContainer>(`${environment.apiUrl}/starships/?page=${page}`).pipe(
          shareReplay(environment.cacheExpirationTime)
        );

      setTimeout(() => {
        if (this.pages$ !== null) {
          this.pages$[page - 1] = null;
        }

      }, environment.cacheExpirationTime);
    }

    return this.pages$[page - 1].toPromise();
  }

  public getStarship(id: number) {
    if (!this.starships$[id - 1]) {
      this.starships$[id - 1] = this.httpClient
        .get<Starship>(`${environment.apiUrl}/starships/${id}`).pipe(
          shareReplay(environment.cacheExpirationTime)
        );

      setTimeout(() => {
        if (this.starships$ !== null) {
          this.starships$[id - 1] = null;
        }

      }, environment.cacheExpirationTime);
    }

    return this.starships$[id - 1].toPromise();
  }

  public getFilm(id: number) {
    if (!this.films$[id - 1]) {
      this.films$[id - 1] = this.httpClient
        .get<Film>(`${environment.apiUrl}/films/${id}`).pipe(
          shareReplay(environment.cacheExpirationTime)
        );

      setTimeout(() => {
        if (this.films$ !== null) {
          this.films$[id - 1] = null;
        }

      }, environment.cacheExpirationTime);
    }

    return this.films$[id - 1].toPromise();
  }
}
