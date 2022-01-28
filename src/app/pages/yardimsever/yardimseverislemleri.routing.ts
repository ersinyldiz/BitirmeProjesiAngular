import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Yardımsever İşlemleri ',
      status: false
    },
    children: [
      {
        path: 'YardimBekleyen',
        loadChildren: () => import('./yardimbekleyen/yardimbekleyen.module').then(m => m.YardimBekleyenModule)
      },
      {
        path: 'YapilanYardimlar',
        loadChildren: () => import('./yapilanyardimlar/yapilanyardimlar.module').then(m => m.YapilanYardimlarModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YardimseverIslemleriRoutingModule { }
