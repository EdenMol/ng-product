import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/i-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productSubscription: Subscription

  get products(): IProduct[] {
    return this.productService.products || []
  }
  constructor(
    public productService: ProductService) { }

  ngOnInit() {
    if (this.products && !this.products.length) {
      this.productSubscription = this.productService.getProducts()
        .subscribe(products => {
          this.productService.products = products
        })
    }
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe()
    }
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
  }

  saveProduct(product: IProduct) {
    this.productService.saveProduct(product)
  }
}
