import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { CardRefreshDirective } from './card/card-refresh.directive';
import { CardToggleDirective } from './card/card-toggle.directive';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';
import { ToastyModule } from 'ng2-toasty';
import { ClickOutsideModule } from 'ng-click-outside';
import { SpinnerComponent } from './spinner/spinner.component';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NotificationsService } from 'angular2-notifications';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastyModule.forRoot(),
    ClickOutsideModule,
    PerfectScrollbarModule,
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    CardComponent,
    SpinnerComponent,
    ModalAnimationComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    CardComponent,
    SpinnerComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ModalAnimationComponent,
    ToastyModule,
    ClickOutsideModule,
    PerfectScrollbarModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    NotificationsService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
