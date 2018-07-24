import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../core/services/authorization/authorization.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  constructor(private authService: AuthorizationService) {}
  public isAuthenticated: boolean;

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
