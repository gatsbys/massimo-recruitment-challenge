import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginScreenComponent } from './login-screen.component'
import { LoginScreenRoutingModule } from './login-screen-routing.module'
import { MaterialModule } from '../../kernel/material-store/material-store.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginScreenComponent
    ],
    imports: [
        CommonModule,
        LoginScreenRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginScreenModule {

}