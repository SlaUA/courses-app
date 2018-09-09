import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthorizationService } from '../authorization/authorization.service';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userSubject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private authService: AuthorizationService, private http: HttpClient) {
    this.authService.isAuthenticated().subscribe((loggedIn) => {

      if (!loggedIn) {
        return;
      }

      this.http.post('auth/userinfo', {}).subscribe((user: User) => this.userSubject.next(user));
    });
  }

  getCurrentUser(): Observable<User> {
    return this.userSubject.asObservable();
  }
}
