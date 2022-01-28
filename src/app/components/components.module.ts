import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RolTanimlariComponent } from './usermanagement/RolTanimlari/roltanimlari.component';
import { MenuTanimlariComponent } from './usermanagement/MenuTanimlari/menutanimlari.component';
import { IllerComponent } from './tanim/Iller/iller.component';
import { IlcelerComponent } from './tanim/Ilceler/ilceler.component';
import { MahalleComponent } from './tanim/Mahalle/mahalle.component';

import { DxLookupModule } from 'devextreme-angular';
import { MuhtarlarComponent } from './tanim/muhtarlar/muhtarlar.component';



@NgModule({
  declarations: [
    RolTanimlariComponent,
    MenuTanimlariComponent,
    IllerComponent,
    IlcelerComponent,
    MahalleComponent,
    MuhtarlarComponent
  ],
  imports: [
    CommonModule,
    DxLookupModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RolTanimlariComponent,
    MenuTanimlariComponent,
    IllerComponent,
    IlcelerComponent,
    MahalleComponent,
    MuhtarlarComponent
  ]
})
export class ComponentsModule { }
