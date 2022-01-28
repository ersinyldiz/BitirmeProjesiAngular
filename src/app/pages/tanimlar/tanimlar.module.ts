import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanimlarRoutingModule } from './tanimlar.routing';
import { TanimlarComponent } from './tanimlar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TanimlarRoutingModule,
    SharedModule
  ],
  declarations: [TanimlarComponent]
})
export class TanimlarModule { }
