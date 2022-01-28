import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Kullanıcı Yönetimi ',
      status: false
    },
    children: [
      {
        // Eklenen Sayfalar Buraya Eklenecek
        path: 'menu',
        loadChildren: () => import('../usermanagement/menu/menu.module').then(m => m.MenuModule)
      },
      {
        // Eklenen Sayfalar Buraya Eklenecek
        path: 'rolles',
        loadChildren: () => import('../usermanagement/roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'passchange',
        loadChildren: () => import('./passwordchange/passwordchange.module').then(m => m.PasswordChangeModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./kullanicibilgileri/kullanicibilgileri.module').then(m => m.KullaniciBilgileriModule)
      }
    ]
  }
];

export const UsermanagementRoutes = RouterModule.forChild(routes);
