import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { UserService } from '../../services/user.service';

class UserRegistrationFormModel {
  username: string;
  password: string;
  confirmPassword: string;
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

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  async submit() {
    if (this.form.form.invalid || !this.isValid(this.model.password) || this.model.password !== this.model.confirmPassword || !this.isValid(this.model.username)) {
      return;
    }
    this.userService.register(this.model.username, this.model.password);
    this.goToLogin();
  }

  isValid(input: string) {
    if(input == '') {
      return;
    } else if (isEmpty(input)) {
      return;
    }
    return true;
  }

  goToLogin() {
    this.router.navigateByUrl("/splash/login");
  }
}
