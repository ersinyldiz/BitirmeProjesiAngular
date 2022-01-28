import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IlcelerComponent } from './ilceler.component';

const routes: Routes = [
  {
    path: '',
    component: IlcelerComponent,
    data: {
      breadcrumb: 'İlçe Tanımları ',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IlcelerRoutingModule { }
