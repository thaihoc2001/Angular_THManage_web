import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login.component";
import {AuthGuard} from "../share/service/auth/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {returnUrl: window.location.pathname}
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
