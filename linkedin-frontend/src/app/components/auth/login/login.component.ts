import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });
  }

  validateCredentials() {
    this.authService.login(new User(this.loginForm.value.email, this.loginForm.value.password));
  }
}
