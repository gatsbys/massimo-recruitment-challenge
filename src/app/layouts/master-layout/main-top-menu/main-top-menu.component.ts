import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../../services/layout/layout.service'

@Component({
  selector: 'app-main-top-menu',
  templateUrl: './main-top-menu.component.html',
  styleUrls: ['./main-top-menu.component.scss']
})
export class MainTopMenuComponent implements OnInit {

  constructor(public authService : AuthService, private router : Router, public layoutService : LayoutService) { }

  ngOnInit(): void {
  }

  async handleLogout(){
    await this.authService.logout();
    await this.router.navigate(["/login"]);
  }
}
