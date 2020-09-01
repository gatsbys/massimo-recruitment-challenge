import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminScreenComponent } from './admin-screen.component'
import { AdminScreenRoutingModule } from './admin-screen-routing.module'
import { MaterialModule } from '../../kernel/material-store/material-store.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AdminScreenComponent
    ],
    imports: [
        CommonModule,
        AdminScreenRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminScreenModule {

}