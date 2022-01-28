import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerceklesenBasvurularComponent } from './gerceklesenbasvurular.component';

const routes: Routes = [
  {
    path: '',
    component: GerceklesenBasvurularComponent,
    data: {
      breadcrumb: 'Gerçekleşen Yardım Başvuruları',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GerceklesenBasvurularRoutingModule { }
