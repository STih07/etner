import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';


import { Routes, RouterModule } from '@angular/router';
import { Intercept } from './authInterceptor';
import { AuthorizationComponent } from './modules/auth/components/authComponent/authorization.component';
import { AuthModule } from './modules/auth/auth.module';
import { PurchasesComponent } from './modules/purchases/components/purchases/purchases.component';
import { PurchasesService } from './modules/purchases/components/services/purchases.service';
import { PurchaseComponent } from './modules/purchases/components/puchase/puchase.component';
import { PurchasesGuard } from './modules/guards/purchases.guard';
import { PurchasesModule } from './modules/purchases/components/purchases.module';




const routes : Routes = [
    {path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
    }  ,
    { path: 'auth', component: AuthorizationComponent},
    { path: 'purchases', component: PurchasesComponent ,  canActivate: [PurchasesGuard]},
    { path: 'purchase/:id', component: PurchaseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    PurchasesModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  providers: [
  PurchasesService  ,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Intercept,
    multi: true
  }
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
