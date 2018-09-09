import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthorizationService, public router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      switchMap(({ loggedIn }) => {

        if (!loggedIn) {
          this.router.navigateByUrl('/login');
        }

        return of(loggedIn);
      })
    );
  }
}
