import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs';
import { catchError, switchMap, tap, map, switchMapTo} from 'rxjs/operators';


import { Router } from '@angular/router';
import { AuthorithationService } from '../../services/authorithation.service';
import { PurchasesService } from 'src/app/modules/purchases/components/services/purchases.service';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  email = 'demo@user.com';
  password = 'Password123';
  size = 12;
  
  
  authorizate(email,password){  
    this.auth.get(email, password).pipe(
      tap(data => this.auth.setToken(data.access_token)
    ).subscribe(
        (data) => this.router.navigate(['purchases'])
    ); 
  }
  
  constructor(
    public auth: AuthorithationService,
    private purchasesService: PurchasesService,
    private router: Router
    ){}
}
