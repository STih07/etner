import { Injectable, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorithationService  {
  
  storage = window.localStorage;
  get(email, password) {
    
    return this.http.post<any>("http://sat-dev.k8yxqmyfez.eu-central-1.elasticbeanstalk.com/api/auth/token",
     {email, password});
  }
  getToken() {
    let token = this.storage.getItem('accesToken');
    if(token){
      return token
    }
  } 
  logOut(){
    this.storage.removeItem("accesToken")
    this.router.navigate(['auth'])
  }
  
  constructor(private http: HttpClient,private router: Router) { }
  
}
