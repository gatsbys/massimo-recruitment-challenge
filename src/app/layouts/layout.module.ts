import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmptyLayoutComponent } from "./empty-layout/empty-layout.component"
import { MasterLayoutComponent } from "./master-layout/master-layout.component"
import { MainTopMenuComponent } from "./master-layout/main-top-menu/main-top-menu.component"
import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './master-layout/side-menu/side-menu.component';
import { LoadingComponent } from './loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        MasterLayoutComponent,
        EmptyLayoutComponent,
        MainTopMenuComponent,
        SideMenuComponent,
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    exports: [
        MasterLayoutComponent,
        EmptyLayoutComponent,
        LoadingComponent
    ]
})
export class LayoutModule {
    
}