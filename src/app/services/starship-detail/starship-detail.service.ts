import { Injectable } from '@angular/core';
import { StarwarsDataProviderService } from '../data-providers/starwars/starwars-data-provider.service';
import { BehaviorSubject } from 'rxjs';
import { Starship } from 'src/app/common/models/starship.model';
import { Film } from 'src/app/common/models/film.model';
import { TransformerService } from '../transformer/transformer.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipDetailService {

  starships: BehaviorSubject<Starship[]> = new BehaviorSubject<Starship[]>([])
  films: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([])

  constructor(private provider: StarwarsDataProviderService, private transformer: TransformerService) { }

  public async getStarship(id: number): Promise<Starship> {
    const starship = {...await this.provider.getStarship(id)};
    this.transformer.enrichStarship(starship);
    starship.films = await Promise.all(starship.films.map(async film => {
      return await this.getFilm(this.transformer.extractId(film))
    }));

    this.fillStarshipsCache(id, starship);
    return starship;
  }

  private async getFilm(id: number): Promise<Film> {
    const film = await this.provider.getFilm(id);
    this.transformer.enrichFilm(film);
    this.fillFilmsCache(id, film);

    return film;
  }

  private fillStarshipsCache(id: number, data: any) {
    const results = this.starships.getValue();
    results[id - 1] = data;
    this.starships.next(results);
  }

  private fillFilmsCache(id: number, data: any) {
    const results = this.films.getValue();
    results[id - 1] = data;
    this.films.next(results);
  }
}
