import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AuthorizationComponent } from './components/authComponent/authorization.component';
import { AuthorithationService } from './services/authorithation.service';



@NgModule({
  declarations: [
    AuthorizationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthorithationService
  ]
  
})
export class AuthModule { }
