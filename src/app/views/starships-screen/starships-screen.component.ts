import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StarshipsService } from './starships.service';

@Component({
  selector: 'app-starships-screen',
  templateUrl: './starships-screen.component.html',
  styleUrls: ['./starships-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipsScreenComponent implements OnInit {

  constructor(public shipsService : StarshipsService) { }

  currentPage = 1;

  async ngOnInit() {
    await this.shipsService.initStarships();
  }

  async handleScroll() {
    this.currentPage++;
    await this.shipsService.loadStarshipsPage(this.currentPage);
  }
}
