import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./share/service/auth/guards/auth.guard";
import {NotFoundComponent} from "./share/ui/not-found/not-found.component";
import {UpdateInformationUserComponent} from "./update-information-user/update-information-user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'updateInfo',
    component: UpdateInformationUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
