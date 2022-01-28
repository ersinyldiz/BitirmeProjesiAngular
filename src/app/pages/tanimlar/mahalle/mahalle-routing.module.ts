import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahalleComponent } from './mahalle.component';

const routes: Routes = [
  {
    path: '',
    component: MahalleComponent,
    data: {
      breadcrumb: 'Mahalle Tanımları ',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MahalleRoutingModule { }
