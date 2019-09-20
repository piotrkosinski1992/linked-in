import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../../models/user';
import { AuthenticationResponse } from './model/authentication.response';
import { RegistrationForm } from './model/registration.form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user: User) {
    return this.http.post('/api/auth', user)
               .subscribe(
                 (response: AuthenticationResponse) => {
                   localStorage.setItem('token', response.token);
                   localStorage.setItem('role', response.role);
                   localStorage.setItem('username', response.username);
                   this.router.navigate(['/profile']);
                 },
                 catchError(err => of(err))
               );
  }

  register(registrationForm: RegistrationForm) {
    return this.http.post('/api/register', registrationForm).subscribe(
      () => this.router.navigate(['/login']),
      catchError(err => {
        this.router.navigate(['/register']);
        return of(err);
      })
    );
  }

}
