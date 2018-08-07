import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../core/services/authorization/authorization.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-page', templateUrl: './login-page.component.html', styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {
  email;
  password;
  loginSubscription: Subscription;

  constructor(private authService: AuthorizationService, private router: Router) {}

  onLogin() {
    this.loginSubscription = this.authService.login({
      email: this.email, password: this.password
    }).subscribe((isLoggedIn) => {

      if (isLoggedIn) {
        return this.router.navigateByUrl('/');
      }
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }
}
