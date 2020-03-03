import { Component, OnInit } from '@angular/core';
import { AuthorithationService } from './authorithation.service';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs';
import { catchError, switchMap, tap, map, switchMapTo} from 'rxjs/operators';
import { PurchasesService } from './purchases.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';

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