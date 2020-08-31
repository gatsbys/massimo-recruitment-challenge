import { Component, OnInit } from '@angular/core';
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss']
})
export class ErrorScreenComponent implements OnInit {

  constructor() { }

  icon = faCarCrash;
  ngOnInit(): void {
  }

}
