import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

const ERROR_EMPTY_FIELD = "Le champ est vide, veuillez le remplir";
const ERROR_INCORECT_FIELD = "Le champ est incorrect, veuillez le corriger";
const ERROR_PASSWORD_DISMATCH = "Les mots de passe ne sont pas identiques !";
const ERROR_ALREADY_EXISTS = "Cet username est déjà utilisé !"
const STATUS_ERROR = "error";
const STATUS_SUCCESS = "success";

class UserRegistrationFormModel {
  username = "";
  password = "";
  confirmPassword = "";
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.less']
})

export class UserRegistrationComponent implements OnInit {
  @ViewChild("f")
  form: NgForm;
  model = new UserRegistrationFormModel();

  //Error gestion
  usernameValidateStatus = "";
  usernameErrorMessage = ERROR_EMPTY_FIELD;

  passwordValidateStatus = "";
  passwordErrorMessage = ERROR_EMPTY_FIELD;

  passwordVerifValidateStatus = "";
  passwordVerifErrorMessage = ERROR_EMPTY_FIELD;
  


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  async submit() {
    this.usernameValidateStatus = STATUS_SUCCESS;
    this.passwordValidateStatus = STATUS_SUCCESS;
    this.passwordVerifValidateStatus = STATUS_SUCCESS;

    if (this.form.form.invalid || this.model.password !== this.model.confirmPassword || this.model.password == "" || this.model.username == "") {
      if(this.model.password !== this.model.confirmPassword){
        this.passwordValidateStatus = STATUS_ERROR;
        this.passwordErrorMessage = ERROR_PASSWORD_DISMATCH;

        this.passwordVerifValidateStatus = STATUS_ERROR;
        this.passwordVerifErrorMessage = ERROR_PASSWORD_DISMATCH;
      }
      if(this.model.username != ""){}
      return;
    }

    if(await this.userService.isNotAvaible(this.model.username)){
      this.usernameValidateStatus = STATUS_ERROR;
      this.usernameErrorMessage = ERROR_ALREADY_EXISTS;
      return;
    }

    this.userService.register(this.model.username, this.model.password)

    this.goToLogin();
  }

  goToLogin() {
    this.router.navigateByUrl("splash/login")
  }
}
