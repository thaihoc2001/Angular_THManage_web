import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";
import {CreateStaffComponent} from "./create-staff/create-staff.component";
import {CreateManageComponent} from "./create-manage/create-manage.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo:'dasdboard'
      },
      {
        path: 'createStaff',
        component: CreateStaffComponent
      },
      {
        path: 'createManage',
        component: CreateManageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
