import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { IlcelerComponent } from './ilceler.component';
import { IlcelerRoutingModule } from './ilceler-routing.module';
import { EditilcelerComponent } from './editilceler/editilceler.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IlcelerRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [IlcelerComponent, EditilcelerComponent]
})
export class IlcelerModule { }
