import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorScreenComponent } from "./error-screen.component";
import { ErrorScreenRoutingModule } from "./error-screen-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        ErrorScreenComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        ErrorScreenRoutingModule
    ]
})
export class ErrorScreenModule {
    
}