import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AddProductModule { }
