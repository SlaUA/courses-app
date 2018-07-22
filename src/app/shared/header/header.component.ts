import { Component, OnInit } from '@angular/core';
import UserService, {
  User
} from '../../core/services/user-service/user.service';
import { AuthorizationService } from '../../core/services/authorization/authorization.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  providers: [UserService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthenticated: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthorizationService,
    private router: Router,
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
