import { Component, OnInit, Input } from '@angular/core';
import { Starship } from 'src/app/common/models/starship.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  starship: Starship;

  constructor() { }

  ngOnInit(): void {
  }

  handleErrorOnImageLoading(shipImage: any): void {
    shipImage.style.backgroundImage = 'url(assets/images/no-image.png)';
  }

}
