import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YardimseverIslemleriRoutingModule } from './yardimseverislemleri.routing';
import { YardimseverIslemleriComponent } from './yardimseverislemleri.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    YardimseverIslemleriRoutingModule,
    SharedModule
  ],
  declarations: [YardimseverIslemleriComponent]
})
export class YardimseverIslemleriModule { }
