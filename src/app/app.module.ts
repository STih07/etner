import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorithationComponent } from './authorithation/authorithation.component';
import { AuthorithationService } from './authorithation.service';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PurchasesService } from './purchases.service';
import { Intercept } from './interceptor';
import { AuthorizationComponent } from './authorization/authorization.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseComponent } from './puchase/puchase.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
    {path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
    }  ,
    { path: 'auth', component: AuthorizationComponent},
    { path: 'purchases', component: PurchasesComponent},
    { path: 'purchase/:id', component: PurchaseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorithationComponent,
    AuthorizationComponent,
    PurchasesComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [
  AuthorithationService,
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
