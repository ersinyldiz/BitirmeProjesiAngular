import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Tanımlar ',
      status: false
    },
    children: [
      {
        path: 'IlTanimlari',
        loadChildren: () => import('./iller/iller.module').then(m => m.IllerModule)
      },
      {
        path: 'IlceTanimlari',
        loadChildren: () => import('./ilceler/ilceler.module').then(m => m.IlcelerModule)
      },
      {
        path: 'MahalleTanimlari',
        loadChildren: () => import('./mahalle/mahalle.module').then(m => m.MahalleModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanimlarRoutingModule { }
