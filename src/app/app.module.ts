import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './share/ui/sidebar/sidebar.component';
import { FooterComponent } from './share/ui/footer/footer.component';
import { NavbarComponent } from './share/ui/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxCollapseModule} from "ngx-collapse";
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NotFoundComponent } from './share/ui/not-found/not-found.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UpdateInformationUserComponent } from './update-information-user/update-information-user.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    UpdateInformationUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NzResultModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
