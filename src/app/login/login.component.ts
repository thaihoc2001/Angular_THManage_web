import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from "../share/service/auth/auth.service";
import { TokenStorageService } from "../share/service/auth/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  infoUser: any;
  validateForm: any;
  size: any;

  constructor( private authService: AuthService,
               private tokenStorageService :TokenStorageService,
               private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.infoUser = this.formBuilder.group({
      username: new FormControl('thaihoc7314', Validators.required),
      password: new FormControl('123456789', Validators.required)
    })
  }

  onSubmit(): void{
    this.authService.login(this.infoUser.getRawValue()).subscribe(
      res => {
        this.tokenStorageService.saveToken(res.body.token)
        this.reload()
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
