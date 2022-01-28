import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { ProfilComponent } from './profil.component';
import { ProfilRoutingModule } from './profil-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule { }
