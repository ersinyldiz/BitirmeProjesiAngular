import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordChangeComponent } from './passwordchange.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordChangeComponent,
    data: {
      breadcrumb: 'Parola Değişikliği',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// Degisecek
export class PasswordChangeRoutingModule { }
