import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/i-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: IProduct[];
  @Output() deleted = new EventEmitter<string>()
  @Output() edited = new EventEmitter<IProduct>()

  constructor(private productService: ProductService) {
  }

  deleteProduct(id: string) {
    this.deleted.emit(id)
  }

  saveProduct(product: IProduct) {
    this.edited.emit(product)
  }
}
