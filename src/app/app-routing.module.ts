import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { AuthGuard } from './services/guards/auth/auth.guard';
import { LoginGuard } from './services/guards/login/login.guard';
import { AdminGuard } from './services/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/starships',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: MasterLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path : 'admin',
        canActivate: [AdminGuard],
        loadChildren: () => import('./views/admin-screen/admin-screen.module').then(m => m.AdminScreenModule)
      },
      {
        path: 'starships',
        loadChildren: () => import('./views/starships-screen/starships-screen.module').then(m => m.StarshipsScreenModule)
      },
      {
        path: 'starships/detail',
        loadChildren: () => import('./views/starship-detail-screen/starship-detail-screen.module').then(m => m.StarshipDetailScreenModule)
      }
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
