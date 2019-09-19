import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {User} from "../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required
        , Validators.min(3), Validators.max(10)])]
    });
  }

  validateCredentials() {
    this.loginService.validateCredentials(new User(this.loginForm.value.email, this.loginForm.value.password))
  }
}
