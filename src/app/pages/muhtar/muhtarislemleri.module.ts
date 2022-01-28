import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuhtarIslemleriRoutingModule } from './muhtarislemleri.routing';
import { MuhtarIslemleriComponent } from './muhtarislemleri.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MuhtarIslemleriRoutingModule,
    SharedModule
  ],
  declarations: [MuhtarIslemleriComponent]
})
export class MuhtarIslemleriModule { }
