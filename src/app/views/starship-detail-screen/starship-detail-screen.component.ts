import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from '../starships-screen/starships.service';
import { Starship } from 'src/app/common/models/starship.model';

@Component({
  selector: 'app-starship-detail-screen',
  templateUrl: './starship-detail-screen.component.html',
  styleUrls: ['./starship-detail-screen.component.scss']
})
export class StarshipDetailScreenComponent implements OnInit {

  starship: Starship;

  constructor(
    private activatedRoute: ActivatedRoute,
    public shipService: StarshipsService,
  ) { }

  ngOnInit(): void {
    this.starship = this.shipService.starships.value.filter(s => s.id == 1)[0];
  }

  showNotFoundImage(cardImage: any): void {
    cardImage.style.backgroundImage = 'url(assets/images/no-image.png)';
  }

}
