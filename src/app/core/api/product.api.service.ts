import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient,
  ) { }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('/api/products', product);
  }
}
