import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { YardimOnayBekleyenComponent } from './yardimonaybekleyen.component';
import { YardimOnayBekleyenRoutingModule } from './yardimonaybekleyen-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    YardimOnayBekleyenRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [YardimOnayBekleyenComponent]
})
export class YardimOnayBekleyenModule { }
