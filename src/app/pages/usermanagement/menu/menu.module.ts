import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { EditmenuComponent } from './editmenu/editmenu.component';



@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  declarations: [MenuComponent, EditmenuComponent]
})
export class MenuModule { }
