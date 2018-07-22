import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../core/services/authorization/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email;
  password;

  constructor(private authService: AuthorizationService, private router: Router) {}

  onLogin() {
    this.authService.login({
      email: this.email,
      password: this.password
    });
    this.router.navigateByUrl('/');
  }
}
