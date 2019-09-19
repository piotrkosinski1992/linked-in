import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router){
  }

  canActivate(): boolean {

    let token = localStorage.getItem('token');

    if(token === null) {
      this.router.navigate(['/login'])
    }

    return token !== null;
  }

}
