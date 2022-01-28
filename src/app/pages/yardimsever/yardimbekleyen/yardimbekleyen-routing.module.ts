import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YardimBekleyenComponent } from './yardimbekleyen.component';

const routes: Routes = [
  {
    path: '',
    component: YardimBekleyenComponent,
    data: {
      breadcrumb: 'Yardım Bekleyen Başvurular',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YardimBekleyenRoutingModule { }
