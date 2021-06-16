import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/api/product.api.interfaces';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  @Input() product: Product;
  @Input() isEdit: boolean;
  @Output() onEdit: EventEmitter<Product>;

  constructor() {
    this.onEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  editProduct(product: Product) {
    this.onEdit.emit(product);
  }

}
