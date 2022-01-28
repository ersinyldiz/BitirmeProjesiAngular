import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KullaniciBilgileriComponent } from './kullanicibilgileri.component';

const routes: Routes = [
  {
    path: '',
    component: KullaniciBilgileriComponent,
    data: {
      breadcrumb: 'Kullanıcı Tanımları ',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KullaniciBilgileriRoutingModule { }
