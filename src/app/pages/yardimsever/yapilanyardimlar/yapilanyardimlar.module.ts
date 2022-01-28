import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { YapilanYardimlarComponent } from './yapilanyardimlar.component';
import { YapilanYardimlarRoutingModule } from './yapilanyardimlar-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    YapilanYardimlarRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [YapilanYardimlarComponent]
})
export class YapilanYardimlarModule { }
