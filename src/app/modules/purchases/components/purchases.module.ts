import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseComponent } from './puchase/puchase.component';
import { PurchasesService } from './services/purchases.service';





@NgModule({
  declarations: [
    PurchasesComponent,
    PurchaseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    PurchasesService ,
  ]
  

})
export class PurchasesModule { }
