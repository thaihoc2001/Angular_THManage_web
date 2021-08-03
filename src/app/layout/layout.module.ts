import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    NzTableModule,
    NzCheckboxModule
  ]
})
export class LayoutModule { }
