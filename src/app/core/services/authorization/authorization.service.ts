import { Injectable, Inject } from '@angular/core';
import { NgxWindowTokenModule, WINDOW } from 'ngx-window-token';

interface User {
  email: string;
  to: string;
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

  login(user: User) {
    this.user = user;
    this.window.localStorage.setItem(this.NAMESPACE, JSON.stringify(this.user));
  }

  logOut() {
    console.log(`loggin out, email: ${this.user.email}`);
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
