import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IllerComponent } from './iller.component';

const routes: Routes = [
  {
    path: '',
    component: IllerComponent,
    data: {
      breadcrumb: 'İl Tanımları ',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IllerRoutingModule { }
