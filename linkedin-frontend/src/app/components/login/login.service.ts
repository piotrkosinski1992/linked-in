import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {AuthenticationResponse} from "../../models/authentication.response";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }

  validateCredentials(user: User) {
    return this.http.post("http://localhost:8080/auth", user)
      .subscribe(
        (response: AuthenticationResponse) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('username', response.username);
          this.router.navigate(['/profile'])
        },
        catchError(err => of(err))
      )
  }
}
