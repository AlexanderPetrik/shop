import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateMessagesComponent } from './components/validate-messages/validate-messages.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ValidateMessagesComponent,
    CartComponent,
    ProductViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [
    ValidateMessagesComponent,
    CartComponent,
    ProductViewComponent,
    RouterModule,
  ]
})
export class SharedModule { }
