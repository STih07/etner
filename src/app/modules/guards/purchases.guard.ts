import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorithationService } from '../auth/services/authorithation.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasesGuard implements CanActivate {
  
  
  constructor(private auth: AuthorithationService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.getToken()){
      console.log(true)
      return true
    }else{
      console.log(false)
      alert('hui sosi lalka');
      this.router.navigate(['auth'])
    }
  }
  
}
