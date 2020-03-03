import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  getPurchases(size,page) {
    return this.http.get<any>(
      "http://sat-dev.k8yxqmyfez.eu-central-1.elasticbeanstalk.com/api/purchase?page="+ page+ "&size=" + size
      )
      
    }
    getPurchaseByID(id:number){
      return this.http.get(
        'http://sat-dev.k8yxqmyfez.eu-central-1.elasticbeanstalk.com/api/purchase/'+id
      )
    }
    constructor(private http: HttpClient) { }
  }
