import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { BasvuruOnayBekleyenComponent } from './basvuruonaybekleyen.component';
import { BasvuruOnayBekleyenRoutingModule } from './basvuruonaybekleyen-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    BasvuruOnayBekleyenRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule
  ],
  declarations: [BasvuruOnayBekleyenComponent]
})
export class BasvuruOnayBekleyenModule { }
