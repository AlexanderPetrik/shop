import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductApiService } from 'src/app/core/api/product.api.service';
import { currencies, Currency } from 'src/app/core/constants/currencies.constant';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  currencies: Currency[] = currencies;

  constructor(
    private fb: FormBuilder,
    private productApiService: ProductApiService,
  ) { }

  ngOnInit(): void {
    this.initAddProductForm();
  }

  // Сделать проверку перед сохранение, что форма валидна и сохранить если валидна иначе показать все ошибки.

  addProduct() {
    this.productApiService
      .addProduct(this.addProductForm.value)
      .subscribe((product) => console.log(product));
  }


  initAddProductForm() {
    this.addProductForm = this.fb.group({
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
