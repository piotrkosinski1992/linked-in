import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegistrationForm } from '../model/registration.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  credentialsForm: FormGroup;
  password: string;
  repeatPassword: string;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.credentialsForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      repeatPassword: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted');
    return this.authService.register(new RegistrationForm(
      this.credentialsForm.value.email,
      this.credentialsForm.value.password,
      this.credentialsForm.value.repeatPassword
    ));
  }
}
