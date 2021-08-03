import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from "../share/service/auth/auth.service";
import { TokenStorageService } from "../share/service/auth/token-storage.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  infoUser: any;
  statusUpdate: any;
  returnUrl: any;

  constructor( private authService: AuthService,
               private tokenStorageService :TokenStorageService,
               private formBuilder: FormBuilder,
               private router: Router,
               private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
    this.infoUser = this.formBuilder.group({
      username: new FormControl('thaihoc2001', Validators.required),
      password: new FormControl('123456789', Validators.required)
    })
    this.authService.checkUpdate$.subscribe(status => {
      console.log(status)
    })
    console.log(this.authService.isLogiedIn())
  }

  onSubmit(): void{
    this.authService.login(this.infoUser.getRawValue())
      .pipe(first())
      .subscribe(
      res => {
        this.tokenStorageService.saveToken(res.body.token)
        this.statusUpdate = res.body.statusUpdate
        if(this.statusUpdate){
          this.router.navigate(['/']);
        }else{
          this.router.navigate(['updateInfo'])
        }
        this.authService.checkUpdate$.next(this.statusUpdate)
      },
      error => {
        console.log(error);
      }
    )
  }
  reload(): void{
    window.location.reload()
  }

  submitForm() {

  }
}
