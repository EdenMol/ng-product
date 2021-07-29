import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  title = ""

  constructor(
    private location: Location,
    private productService: ProductService) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back()
  }
  submit() {
    this.productService.addProduct(this.title)
    this.goBack()
  }

}
