import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApi } from '../auth.api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {

  constructor( private router:Router, private authApi:AuthApi ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if(this.authApi.accessToken!=='') {
          return true;
      } else {
        return this.router.createUrlTree(['/','auth','login']);
      }
    }
}
