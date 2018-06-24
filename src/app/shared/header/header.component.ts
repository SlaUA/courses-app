import { Component, OnInit } from '@angular/core';
import UserService, { User } from '../../core/user-service/user.service';

@Component({
  selector: 'app-header',
  providers: [UserService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }
}
