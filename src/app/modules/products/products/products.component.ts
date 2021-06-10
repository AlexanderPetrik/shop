import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/api/product.api.interfaces';
import { ProductApiService } from '../../../core/api/product.api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productApiService: ProductApiService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productApiService
      .getProducts()
      .subscribe(products => this.products = products);
  }

}
