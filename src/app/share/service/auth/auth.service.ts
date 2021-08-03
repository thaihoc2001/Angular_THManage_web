import { Injectable } from '@angular/core';
import {ApiService} from "../_core/_core.service";
import {TokenStorageService} from "./token-storage.service";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

const apiUrl = environment.urlAPI
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public checkUpdate$ = new BehaviorSubject<boolean>(false);

  constructor( private apiService: ApiService,
               private tokenStorageService: TokenStorageService
  ) {}
  login(infoUser: any): Observable<any> {
    const url = `${apiUrl}/api/auth/login`;
    return this.apiService.post(url, infoUser);
  }

  registerStaff(infoUser: any): Observable<any> {
    const url = `${apiUrl}/api/auth/register/staff`;
    return this.apiService.post(url, infoUser);
  }

  registerManage(infoUser: any): Observable<any> {
    const url = `${apiUrl}/api/auth/register/manage`;
    return this.apiService.post(url, infoUser);
  }

  isLogiedIn(): void {
    return this.getJwtToken();
  }

  getJwtToken(): void{
    return this.tokenStorageService.getToken();
  }
}
