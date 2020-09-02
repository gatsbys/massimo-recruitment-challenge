import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StarshipListService } from '../../services/starship-list/starship-list.service';

@Component({
  selector: 'app-starships-screen',
  templateUrl: './starships-screen.component.html',
  styleUrls: ['./starships-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipListService]
})
export class StarshipsScreenComponent implements OnInit {

  constructor(public shipListService : StarshipListService) { }

  currentPage = 1;

  async ngOnInit() {
    await this.shipListService.initStarshipsPage();
  }

  async handleScroll() {
    this.currentPage++;
    await this.shipListService.loadStarshipsPage(this.currentPage);
  }
}
