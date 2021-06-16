import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
      {path: 'add-product', loadChildren: () => import('./modules/add-product/add-product.module').then(m => m.AddProductModule)},
      {path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},
      {path: 'product/:id', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)}
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
