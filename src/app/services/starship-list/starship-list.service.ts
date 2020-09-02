import { Injectable } from '@angular/core';
import { Starship } from '../../common/models/starship.model'
import { StarshipListContainer } from '../../common/models/starship-list-container.model'
import { BehaviorSubject } from 'rxjs';
import { StarwarsDataProviderService } from '../data-providers/starwars/starwars-data-provider.service';
import { TransformerService } from '../transformer/transformer.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipListService {

  starshipsPages: BehaviorSubject<StarshipListContainer[]> = new BehaviorSubject<StarshipListContainer[]>([this.emptyContainer()])
  get starships(): Starship[] {
    return [].concat(...this.starshipsPages.getValue().map(p => p.results));
  }

  apiHasNoMoreResults = false;

  constructor(private provider: StarwarsDataProviderService,
    private transformerService: TransformerService) { }

  async initStarshipsPage() {
    const pageResults = await this.provider.getPage(1);
    pageResults.results.map(this.transformerService.enrichStarship);
    this.fillPageCache(1, pageResults);
    this.apiHasNoMoreResults = this.starships.length === pageResults.count;
  }

  async loadStarshipsPage(page: number) {
    if (this.apiHasNoMoreResults) return;

    const pageResults = await this.provider.getPage(page);
    pageResults.results.map(this.transformerService.enrichStarship);

    this.fillPageCache(page, pageResults);
    this.apiHasNoMoreResults = this.starships.length === pageResults.count;
  }

  private emptyContainer(): StarshipListContainer {
    return {
      results: [],
      count: 0,
      next: null,
      previous: null
    }
  }

  private fillPageCache(page: number, data) {
    const results = this.starshipsPages.getValue();
    results[page - 1] = data;
    this.starshipsPages.next(results);
  }
}
