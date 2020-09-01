import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsScreenComponent } from './starships-screen.component';

const routes: Routes = [{
    path: '',
    component: StarshipsScreenComponent
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StarshipsScreenRoutingModule { 

  }