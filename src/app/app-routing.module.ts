import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { AuthGuard } from './services/guards/auth/auth.guard';
import { LoginGuard } from './services/guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/starships',
    pathMatch: 'full'
  },
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
        canActivate: [LoginGuard],
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
