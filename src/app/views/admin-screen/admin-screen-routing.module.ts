import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminScreenComponent } from './admin-screen.component'

const routes: Routes = [{
    path: '',
    component: AdminScreenComponent
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminScreenRoutingModule { 

  }