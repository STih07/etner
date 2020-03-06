import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs';
import { catchError, switchMap, tap, map, switchMapTo} from 'rxjs/operators';

import { HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthorithationService } from './modules/auth/services/authorithation.service';


switchMap
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public auth : AuthorithationService ){}
  ngOnInit(){
    
    
  }
}