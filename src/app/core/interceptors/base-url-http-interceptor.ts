import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class BaseUrlHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest < any >, next: HttpHandler): Observable < HttpEvent < any >> {
    const changedReq = req.clone({
      url: `${environment.baseUrl}/${req.url}`
    });
    return next.handle(changedReq);
  }
}
