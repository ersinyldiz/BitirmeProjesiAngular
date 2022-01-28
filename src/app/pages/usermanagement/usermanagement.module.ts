import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermanagementRoutes } from './usermanagement.routing';
import { SharedModule } from '../../shared/shared.module';
import { UsermanagementComponent } from './usermanagement.component';

@NgModule({
  imports: [
    CommonModule,
    UsermanagementRoutes,
    SharedModule
  ],
  declarations: [UsermanagementComponent]
})

export class UsermanagementModule { }
