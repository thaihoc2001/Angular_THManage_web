import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
