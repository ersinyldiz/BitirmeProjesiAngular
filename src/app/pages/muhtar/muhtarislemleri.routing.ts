import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Muhtar İşlemleri ',
      status: false
    },
    children: [
      {
        path: 'BasvuruOnayBekleyen',
        loadChildren: () => import('./basvuruonaybekleyen/basvuruonaybekleyen.module').then(m => m.BasvuruOnayBekleyenModule)
      },
      {
        path: 'YardimOnayBekleyen',
        loadChildren: () => import('./yardimonaybekleyen/yardimonaybekleyen.module').then(m => m.YardimOnayBekleyenModule)
      },
      {
        path: 'GerceklesenYardimlar',
        loadChildren: () => import('./gerceklesenbasvurular/gerceklesenbasvurular.module').then(m => m.GerceklesenBasvurularModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuhtarIslemleriRoutingModule { }
