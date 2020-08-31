import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterScreenComponent } from './register-screen.component'
import { RegisterScreenRoutingModule } from './register-screen-routing.module'
import { MaterialModule } from '../../kernel/material-store/material-store.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegisterScreenComponent
    ],
    imports: [
        CommonModule,
        RegisterScreenRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RegisterScreenModule {

}