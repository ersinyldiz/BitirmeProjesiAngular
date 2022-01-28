import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { MahalleComponent } from './mahalle.component';
import { MahalleRoutingModule } from './mahalle-routing.module';
import { EditmahalleComponent } from './editmahalle/editmahalle.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MahalleRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [MahalleComponent, EditmahalleComponent]
})
export class MahalleModule { }
