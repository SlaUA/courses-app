import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user-service/user.service';
import {AuthorizationService} from '../../core/services/authorization/authorization.service';
import {Router} from '@angular/router';
import {User} from '../../core/services/user-service/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header', providers: [], templateUrl: './header.component.html', styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthenticated: boolean;
  loginSubscription: Subscription;

  constructor(public userService: UserService, public authService: AuthorizationService, public router: Router,) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.loginSubscription = this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  onLogout() {
    this.authService.logOut();
  }
}
