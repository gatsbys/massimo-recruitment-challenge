import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipDetailScreenComponent } from './starship-detail-screen.component';

const routes: Routes = [{
  path: ':id',
  component: StarshipDetailScreenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipDetailScreenRoutingModule {

}