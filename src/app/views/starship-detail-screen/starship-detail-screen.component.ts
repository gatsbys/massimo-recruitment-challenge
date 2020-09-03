import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarshipDetailService } from '../../services/starship-detail/starship-detail.service';
import { Starship } from 'src/app/common/models/starship.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-starship-detail-screen',
  templateUrl: './starship-detail-screen.component.html',
  styleUrls: ['./starship-detail-screen.component.scss'],
  providers: [StarshipDetailService]
})
export class StarshipDetailScreenComponent implements OnInit {

  starship: Starship = new Starship();

  constructor(
    private activatedRoute: ActivatedRoute,
    public detailService: StarshipDetailService,
    private titleService : Title
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (p: Params) => {
      this.starship = await this.detailService.getStarship(p.id);
      this.titleService.setTitle(`Massimo Dutti - Ships - ${this.starship.name}`)
    });
  }

  showNotFoundImage(shipImage: any): void {
    shipImage.style.backgroundImage = 'url(assets/images/no-image.jpg)';
    shipImage.style.backgroundSize = "contain";
  }

}
