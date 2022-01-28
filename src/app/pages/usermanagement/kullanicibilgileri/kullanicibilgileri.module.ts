import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule, DxTagBoxModule } from 'devextreme-angular';
import { KullaniciBilgileriComponent } from './kullanicibilgileri.component';
import { KullaniciBilgileriRoutingModule } from './kullanicibilgileri-routing.module';
import { EditkullanicibilgileriComponent } from './editkullanicibilgileri/editkullanicibilgileri.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    KullaniciBilgileriRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ComponentsModule,
    DxTagBoxModule
  ],
  declarations: [KullaniciBilgileriComponent, EditkullanicibilgileriComponent]
})
export class KullaniciBilgileriModule { }
