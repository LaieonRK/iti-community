import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ɵangular_packages_router_router_n } from '@angular/router';
import { NzMessageService } from "ng-zorro-antd/message";
import { UserService } from 'src/modules/user/services/user.service';
import { AuthenticationService } from '../../services/authentication.service';

  const ERROR_USERNAME_DONT_EXIST = "Cet username n'existe pas !"
  const ERROR_PASSWORD_NOT_CORRECT = "Le mot de passe est erroné !"
  const STATUS_ERROR = "error"
  const STATUS_SUCCESS = "success"

class LoginFormModel {
  username = "";
  password = "";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @ViewChild(NgForm, { static: false })
  ngForm: NgForm;
  model = new LoginFormModel();

  usernameValidateStatus = "";
  usernameErrorMessage = "";
  passwordValidateStatus = "";
  passwordErrorMessage = "";

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  goToRegistration() {
    this.router.navigateByUrl("splash/register")
  }

  submit() {
    this.login();
  }

  async login() {

    this.usernameValidateStatus = STATUS_SUCCESS;
    this.passwordValidateStatus = STATUS_SUCCESS;

    if (this.ngForm.form.invalid) {
      return;
    }

    try {
      if((await this.authService.authenticate(this.model.username, this.model.password)).success){
          this.router.navigateByUrl("/")
      }else{
        this.nzMessageService.error("Les identifiants sont incorrects");

        if(await this.userService.isNotAvaible(this.model.username)){
          this.passwordValidateStatus = STATUS_ERROR;
          this.passwordErrorMessage = ERROR_PASSWORD_NOT_CORRECT
        }else{
          this.usernameValidateStatus = STATUS_ERROR;
          this.usernameErrorMessage = ERROR_USERNAME_DONT_EXIST
        }
      };

    } catch (e) {
      this.nzMessageService.error(e.message);
    }
  }
}
