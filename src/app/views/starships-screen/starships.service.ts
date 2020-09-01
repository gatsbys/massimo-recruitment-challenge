import { Injectable } from '@angular/core';
import { Starship } from '../../common/models/starship.model'
import { StarshipListContainer } from '../../common/models/starship-list-container.model'
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  pages$: Observable<StarshipListContainer>[] = [];
  
  starships: BehaviorSubject<Starship[]> = new BehaviorSubject<Starship[]>(null);

  apiHasNoMoreResults = false;

  constructor(private httpClient: HttpClient) { }

  async initStarships() {
    this.starships.next((await this.getStarships(1).toPromise()).results.map(this.applyEtl));
  }

  async loadStarshipsPage(page : number) {
    if(this.apiHasNoMoreResults) return;

    const pageResults = await this.getStarships(page).toPromise();
    const starships = pageResults.results.map(this.applyEtl);
    this.starships.next(this.starships.value.concat(starships));
    this.apiHasNoMoreResults = this.starships.value.length === pageResults.count;
  }

  private getStarships(page: number): Observable<StarshipListContainer> {
    if (!this.pages$[page - 1]) {
      this.pages$[page - 1] = this.getFromApi(page).pipe(
        shareReplay(environment.cacheExpirationTime)
      );

      setTimeout(() => {
        this.pages$[page - 1] = null;
      }, environment.cacheExpirationTime);
    }

      return this.pages$[page - 1];
  }

  private getFromApi(page: number): Observable<StarshipListContainer> {
    return this.httpClient
      .get<StarshipListContainer>(`${environment.apiUrl}/starships/?page=${page}`);
  }

  private applyEtl(ship : Starship){
    ship.id = `${(ship.url.split('/')[ship.url.split('/').length - 2])}`;
    ship.image = `${environment.imageApi}${ship.id}.jpg`;
    return ship;
  }
}
