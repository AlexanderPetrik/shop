import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateMessagesComponent } from './components/validate-messages/validate-messages.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    ValidateMessagesComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
  ],

  exports: [
    ValidateMessagesComponent,
    CartComponent,
  ]
})
export class SharedModule { }
