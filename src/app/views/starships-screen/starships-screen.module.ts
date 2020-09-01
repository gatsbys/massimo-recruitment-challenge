import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StarshipsScreenComponent } from './starships-screen.component'
import { StarshipsScreenRoutingModule } from './starships-screen-routing.module';
import { CardComponent } from './card/card.component'

@NgModule({
    declarations: [
        StarshipsScreenComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        StarshipsScreenRoutingModule,
        InfiniteScrollModule,
    ]
})
export class StarshipsScreenModule {

}