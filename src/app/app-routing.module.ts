import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthGuard } from './authservices/aut-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'tanimlar',
        loadChildren: () => import('./pages/tanimlar/tanimlar.module').then(m => m.TanimlarModule)
      },
      {
        path: 'muhtar',
        loadChildren: () => import('./pages/muhtar/muhtarislemleri.module').then(m => m.MuhtarIslemleriModule)
      },
      {
        path: 'yardimsever',
        loadChildren: () => import('./pages/yardimsever/yardimseverislemleri.module').then(m => m.YardimseverIslemleriModule)
      },
      {
        path: 'kullaniciyonetimi',
        loadChildren: () => import('./pages/usermanagement/usermanagement.module').then(m => m.UsermanagementModule)
      },
      {
        path: 'Profil',
        loadChildren: () => import('./pages/profil/profil.module').then(m => m.ProfilModule)
      },

    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
