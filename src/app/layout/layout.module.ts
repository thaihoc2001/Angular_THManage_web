import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { CreateManageComponent } from './create-manage/create-manage.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateStaffComponent,
    CreateManageComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
