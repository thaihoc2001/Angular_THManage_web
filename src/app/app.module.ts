import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './share/ui/sidebar/sidebar.component';
import { FooterComponent } from './share/ui/footer/footer.component';
import { NavbarComponent } from './share/ui/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxCollapseModule} from "ngx-collapse";
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
