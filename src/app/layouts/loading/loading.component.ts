import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from '../../services/loading/loading.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private spinner : NgxSpinnerService, private loadingService : LoadingService) { }

  ngOnInit(): void {
    this.loadingService.showLoading
    .subscribe((value) => {
      if (value && this.loadingService.isActive) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }

}
