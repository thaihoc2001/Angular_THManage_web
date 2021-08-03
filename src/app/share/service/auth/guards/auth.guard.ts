import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";
import {FormControl, Validators} from "@angular/forms";
import {TokenStorageService} from "../token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  checkUpdateInfo: boolean = false;
  checkLogin: boolean = false;
  isUpdate: any;
  constructor( private authService: AuthService,
               private router: Router,
               private tokenStorageService: TokenStorageService) {
    this.authService.checkUpdate$.subscribe(status => {
      this.checkUpdateInfo = status;
    })
    // this.checkLogin = this.authService.isLogiedIn()
  }

  canActivate(){
    // if (this.checkLogin && this.checkUpdateInfo){
    //   this.router.navigate(['/home']);
    // }else if(this.checkLogin && !this.checkUpdateInfo){
    //   this.router.navigate(['/updateInfo'])
    // }
    // return !this.authService.isLogiedIn();
    // @ts-ignore
    if(this.authService.isLogiedIn()){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.checkLogin){
      return true;
    }
    this.router.navigate(['/'])
    return false;
  }
}
