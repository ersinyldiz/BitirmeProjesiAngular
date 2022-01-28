import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dahboard.module-routing';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
