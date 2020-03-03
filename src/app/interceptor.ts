import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorithationService } from './authorithation.service';

@Injectable()
export class Intercept implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        const _request = request.clone({
          headers: new HttpHeaders({'Authorization': this.authorization.getToken() || ''})
        });
        return next.handle(_request);
      }

  constructor(private authorization: AuthorithationService ){}

}