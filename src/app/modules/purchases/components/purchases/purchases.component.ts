import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/internal/operators/map';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';
import { PurchasesService } from '../services/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchases: any[] = [];
  counter: number = 0;
  
  temporaryArray  = [
  {
      value:1,
      isActive: true
  },
  {
    value:2,
    isActive: false
  },
  {
    value:3,
    isActive: false
  },
  {
    value:4,
    isActive: false
  },
  {
    value:5,
    isActive: false
  },
  
  ];
  
  uppCounter(){
    this.counter++
  }
    
  constructor(private purchasesService: PurchasesService) { }
    
  ngOnInit(): void {
    this.getMorePurchases();
    
  }
  updatePaggination(arg){
    this.counter = arg.value
   for(let i = arg.value - 4, h = 0;h < 9; i++, h++) {  
      this.temporaryArray[h] = {value: i,isActive : false} 
    }
    this.temporaryArray.find((element)=>element.value === arg.value).isActive = true
    this.temporaryArray = this.temporaryArray.filter((element)=>element.value >0)
  }


  getPage(number){
    this.purchasesService.getPurchases(12,number).pipe(
      tap(({purchases})=>this.purchases = purchases)
    ).subscribe()
  }

  getMorePurchases() {
    this.purchasesService.getPurchases(12,this.counter).pipe( 
    ).subscribe( ({purchases})=>{
        if(this.temporaryArray[this.temporaryArray.length-1].isActive === true){
          this.purchases = []
          this.updatePaggination({value:this.counter+1,isActive: false})
          this.counter--
        }else{
        this.temporaryArray[this.counter++].isActive = true ;
      }
      this.purchases = this.purchases.concat(purchases) 
      console.log(this.purchases)
      }
    );
  }   
}
