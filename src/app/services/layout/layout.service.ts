import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  showSideMenu : Boolean = false;

  constructor() { }

  toggleMenu() {
    this.showSideMenu = !this.showSideMenu;
  }

  forceHide() {
    this.showSideMenu = false;
  }
}
