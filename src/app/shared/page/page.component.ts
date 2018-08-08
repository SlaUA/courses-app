import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthorizationService } from '../../core/services/authorization/authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthorizationService) {}
  public isAuthenticated: boolean;
  loginSubscription: Subscription;

  ngOnInit() {
    this.loginSubscription = this.authService.isAuthenticated()
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy(){
    this.loginSubscription.unsubscribe();
  }
}
