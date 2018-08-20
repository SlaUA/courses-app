import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from 'ngx-window-token';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingService } from '../loading/loading.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from './reducer';
import * as constants from './constants';

interface User {
  email: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private TOKEN_NAMESPACE = 'token';

  private window: Window;
  private http: HttpClient;
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
      @Inject(WINDOW) _window,
      http: HttpClient,
      private router: Router,
      private loadingService: LoadingService,
      private store: Store<AuthState>
    ) {
    this.window = _window;
    this.http = http;
    let token;

    try {
      token = this.window.localStorage.getItem(this.TOKEN_NAMESPACE);
      if(token){
        this.store.dispatch({
          type: constants.LOGGED_IN,
          token
        });
        this.loggedInSubject.next(true);
      } else {
        this.store.dispatch({ type: constants.LOGGED_OUT });
      }
    } catch (error) {
      this.store.dispatch({ type: constants.LOGGED_OUT });
      this.loggedInSubject.next(false);
    }
  }

  getToken(): string {
    return this.window.localStorage.getItem(this.TOKEN_NAMESPACE) || '';
  }

  login(userData: User) {
    this.loadingService.startLoading();

    return this.http
      .post('auth/login', {
        login: userData.email,
        password: userData.password
      })
      .pipe(
        switchMap((response: any) => {
          this.loadingService.stopLoading();

          if (!response.token) {
            return of(false);
          }

          this.window.localStorage.setItem(this.TOKEN_NAMESPACE, response.token);
          this.store.dispatch({
            type: constants.LOGGED_IN,
            token: response.token
          });
          this.loggedInSubject.next(true);

          return of(true);
        })
      );
  }

  logOut() {
    this.loggedInSubject.next(false);
    this.store.dispatch({ type: constants.LOGGED_OUT });
    this.window.localStorage.removeItem(this.TOKEN_NAMESPACE);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return this.loggedInSubject.asObservable();
  }
}
