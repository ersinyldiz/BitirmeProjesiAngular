import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { PasswordChangeRoutingModule } from './passwordchange-routing.module';
import { PasswordChangeComponent } from './passwordchange.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordChangeRoutingModule,
		SharedModule,
		DxDataGridModule,
		DxTemplateModule,
		DxBulletModule
	],
	declarations: [PasswordChangeComponent]
})
export class PasswordChangeModule { }
