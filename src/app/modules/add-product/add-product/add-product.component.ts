import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.initAddProductForm();
  }

  addProduct() {
    console.log(this.addProductForm.value);
  }


  initAddProductForm() {
    this.addProductForm = this.fb.group({
      title: '',
      description: '',
      price: null,
      qty: '',
      discount: null,
      currency: 'USD',
      infoFields:[],
    });
  }


}
