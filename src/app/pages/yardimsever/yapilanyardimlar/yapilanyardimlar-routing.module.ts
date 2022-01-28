import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YapilanYardimlarComponent } from './yapilanyardimlar.component';

const routes: Routes = [
  {
    path: '',
    component: YapilanYardimlarComponent,
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

export class YapilanYardimlarRoutingModule { }
