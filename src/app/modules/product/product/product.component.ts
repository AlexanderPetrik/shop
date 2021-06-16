import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { currencies, Currency } from 'src/app/core/constants/currencies.constant';
import { Product } from '../../../core/api/product.api.interfaces';
import { ProductApiService } from '../../../core/api/product.api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  editProductForm: FormGroup;
  product: Product;
  currencies: Currency[] = currencies;

  constructor(
    private fb: FormBuilder,
    private productApiService: ProductApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.initEditProductForm();
  }

  editProduct(product: Product) {
    console.log(product);

    // продукт записать в форму
  }

  getProduct() {
    this.activatedRoute.params.subscribe(params => {
      this.productApiService
        .getProduct(params.id)
        .subscribe(product => this.product = product);
    })
  }

  initEditProductForm() {
    this.editProductForm = this.fb.group({
      image: '',
      title: ['', [Validators.required, (control: FormControl) => control.value === 'x' ? {isX: true} : null]],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      qty: [null, Validators.required],
      discount: null,
      currency: 'USD',
      infoFields:[],
    });
  }

}
