import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarshipDetailScreenComponent } from './starship-detail-screen.component'
import { StarshipDetailScreenRoutingModule } from './starship-detail-screen-routing.module';

@NgModule({
    declarations: [
        StarshipDetailScreenComponent,
    ],
    imports: [
        CommonModule,
        StarshipDetailScreenRoutingModule,
    ]
})
export class StarshipDetailScreenModule {

}