import { Component, OnInit } from '@angular/core';
import {AuthService} from "../share/service/auth/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update-information-user',
  templateUrl: './update-information-user.component.html',
  styleUrls: ['./update-information-user.component.scss']
})
export class UpdateInformationUserComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  test() {
    console.log(this.authService.checkUpdate$.value);
  }
}
