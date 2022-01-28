import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { YardimBekleyenComponent } from './yardimbekleyen.component';
import { YardimBekleyenRoutingModule } from './yardimbekleyen-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    YardimBekleyenRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [YardimBekleyenComponent]
})
export class YardimBekleyenModule { }
