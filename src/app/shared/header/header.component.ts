import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user-service/user.service';
import { AuthorizationService } from '../../core/services/authorization/authorization.service';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from '../../core/services/user-service/user.service';

@Component({
  selector: 'app-header',
  providers: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthenticated: boolean;

  constructor(
    public userService: UserService,
    public authService: AuthorizationService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
