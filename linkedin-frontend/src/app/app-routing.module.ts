import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobsComponent} from "./components/jobs/jobs.component";
import {FriendsComponent} from "./components/friends/friends.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {AdminAuthGuardService} from "./commons/auth-guard/admin.auth-guard.service";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {path: 'jobs', component: JobsComponent, canActivate : [AdminAuthGuardService]},
  {path: 'messages', component: MessagesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
