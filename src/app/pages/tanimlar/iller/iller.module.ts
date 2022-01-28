import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { IllerComponent } from './iller.component';
import { IllerRoutingModule } from './iller-routing.module';
import { EditillerComponent } from './editiller/editiller.component';

@NgModule({
  imports: [
    CommonModule,
    IllerRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  declarations: [IllerComponent, EditillerComponent]
})
export class IllerModule { }
