import { Injectable } from '@angular/core';
import { Starship } from 'src/app/common/models/starship.model';
import { environment } from 'src/environments/environment';
import { Film } from 'src/app/common/models/film.model';

@Injectable({
  providedIn: 'root'
})
export class TransformerService {

  constructor() { }

  public enrichStarship(ship : Starship){
    ship.id = `${(ship.url.split('/')[ship.url.split('/').length - 2])}`;
    ship.image = `${environment.imageApi}/starships/${ship.id}.jpg`;
  }

  public enrichFilm(film : Film){
    film.id = `${(film.url.split('/')[film.url.split('/').length - 2])}`;
    film.image = `${environment.imageApi}/films/${film.id}.jpg`;
  }

  public extractId(url : any) : number{
    return +`${(url.split('/')[url.split('/').length - 2])}`;
  }
}
