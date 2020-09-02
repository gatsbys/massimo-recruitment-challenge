import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout/layout.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(public layoutService : LayoutService, private router : Router, public authService : AuthService) { }

  ngOnInit(): void {
  }

  async handleLogout(){
    await this.authService.logout();
    await this.router.navigate(["/login"]);
  }
}
