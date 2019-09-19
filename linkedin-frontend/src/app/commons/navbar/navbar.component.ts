import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogoutClicked() {
    localStorage.clear()
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null
  }
}
