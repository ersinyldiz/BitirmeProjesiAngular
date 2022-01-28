import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { GerceklesenBasvurularComponent } from './gerceklesenbasvurular.component';
import { GerceklesenBasvurularRoutingModule } from './gerceklesenbasvurular-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    GerceklesenBasvurularRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [GerceklesenBasvurularComponent]
})
export class GerceklesenBasvurularModule { }
