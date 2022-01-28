import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YardimOnayBekleyenComponent } from './yardimonaybekleyen.component';

const routes: Routes = [
  {
    path: '',
    component: YardimOnayBekleyenComponent,
    data: {
      breadcrumb: 'Yardım Onayı Bekleyen Başvurular',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YardimOnayBekleyenRoutingModule { }
