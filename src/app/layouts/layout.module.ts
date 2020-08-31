import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmptyLayoutComponent } from "./empty-layout/empty-layout.component"
import { MasterLayoutComponent } from "./master-layout/master-layout.component"
import { MainTopMenuComponent } from "./master-layout/main-top-menu/main-top-menu.component"
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        MasterLayoutComponent,
        EmptyLayoutComponent,
        MainTopMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        MasterLayoutComponent,
        EmptyLayoutComponent
    ]
})
export class LayoutModule {
    
}