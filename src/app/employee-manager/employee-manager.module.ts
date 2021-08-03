import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagerRoutingModule } from './employee-manager-routing.module';
import { EmployeeManagerComponent } from './employee-manager.component';


@NgModule({
  declarations: [
    EmployeeManagerComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagerRoutingModule
  ]
})
export class EmployeeManagerModule { }
