import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterScreenComponent } from './register-screen.component'

const routes: Routes = [{
    path: '',
    component: RegisterScreenComponent
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RegisterScreenRoutingModule { 

  }