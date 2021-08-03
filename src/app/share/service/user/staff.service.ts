import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ApiService} from "../_core/_core.service";
import {Observable} from "rxjs";

const apiUrl = environment.urlAPI
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private apiService: ApiService) { }
  getAllStaff(): Observable<any>{
    const path = `${apiUrl}/staff`
    return this.apiService.get(path);
  }
}
