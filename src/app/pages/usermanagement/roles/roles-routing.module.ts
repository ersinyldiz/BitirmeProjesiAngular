import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Degisken
import { RolesComponent } from './roles.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    data: {
      // Degişecek
      breadcrumb: 'Rol Tanımları',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// Degisecek
export class RolesRoutingModule { }
