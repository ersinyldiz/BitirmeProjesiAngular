import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BasicAuthInterceptor } from './authservices/basic-auth.interceptor';
import { ErrorInterceptor } from './authservices/error.interceptor';
import { ComponentsModule } from './components/components.module';
import { YopsilonMaskModule } from 'yopsilon-mask';
import { DxBulletModule, DxTemplateModule, DxDataGridModule,DxTreeViewModule, DxListModule, DxDateBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AuthComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    YopsilonMaskModule,
    ComponentsModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxTreeViewModule,
    DxListModule,
    DxDateBoxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
