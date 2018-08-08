import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WINDOW } from 'ngx-window-token';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import {Router} from '@angular/router';

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

  constructor(@Inject(WINDOW) _window, http: HttpClient, private router: Router) {
    this.window = _window;
    this.http = http;
    let isLoggedIn;

    try {
      isLoggedIn = Boolean(JSON.parse(this.window.localStorage.getItem(this.TOKEN_NAMESPACE)));
      this.loggedInSubject.next(isLoggedIn);
    } catch (error) {
      this.loggedInSubject.next(false);
    }
  }

  getToken(): string {
    return this.window.localStorage.getItem(this.TOKEN_NAMESPACE);
  }

  login(userData: User) {
    return this.http
      .post('auth/login', {
        login: userData.email,
        password: userData.password
      })
      .pipe(
        switchMap((response: any) => {

          if (!response.token) {
            return of(false);
          }

          this.loggedInSubject.next(true);
          this.window.localStorage.setItem(this.TOKEN_NAMESPACE, JSON.stringify(response.token));
          return of(true);
        })
      );
  }

  logOut() {
    this.loggedInSubject.next(false);
    this.window.localStorage.removeItem(this.TOKEN_NAMESPACE);
    this.router.navigateByUrl('/login');
  }

  getUserInfo() {}

  isAuthenticated() {
    return this.loggedInSubject.asObservable();
  }
}
