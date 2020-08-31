import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { AuthGuard } from './services/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'starships',
    component: MasterLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      
      
    ],
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children : [
      {
        path : 'error',
        loadChildren: () => import('./views/error-screen/error-screen.module').then(m => m.ErrorScreenModule)
      },
      {
        path : 'login',
        loadChildren: () => import('./views/login-screen/login-screen.module').then(m => m.LoginScreenModule)
      },
      {
        path : 'register',
        loadChildren: () => import('./views/register-screen/register-screen.module').then(m => m.RegisterScreenModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
