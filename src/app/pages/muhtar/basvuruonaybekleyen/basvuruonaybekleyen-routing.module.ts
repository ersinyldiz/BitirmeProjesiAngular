import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasvuruOnayBekleyenComponent } from './basvuruonaybekleyen.component';

const routes: Routes = [
  {
    path: '',
    component: BasvuruOnayBekleyenComponent,
    data: {
      breadcrumb: 'Muhtar Onayı Bekleyen Başvurular',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasvuruOnayBekleyenRoutingModule { }
