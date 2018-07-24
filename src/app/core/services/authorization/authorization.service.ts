import { Injectable, Inject } from '@angular/core';
import { WINDOW } from 'ngx-window-token';

interface User {
  email: string;
  password?: string;
  hash?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  user: User | null;
  private window: Window;
  private NAMESPACE = 'AuthorizationService';

  constructor(@Inject(WINDOW) _window) {
    this.window = _window;

    try {
      this.user = JSON.parse(this.window.localStorage.getItem(this.NAMESPACE));
    } catch (error) {
      this.user = null;
    }
  }

  login(userData: User) {
    this.user = {
      email: userData.email,
      hash: this.window.btoa(userData.password)
    };
    this.window.localStorage.setItem(this.NAMESPACE, JSON.stringify(this.user));
  }

  logOut() {
    this.user = null;
    this.window.localStorage.removeItem(this.NAMESPACE);
  }

  getUserInfo() {
    return this.user;
  }

  isAuthenticated() {
    return Boolean(this.user);
  }
}
