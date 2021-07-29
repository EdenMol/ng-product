import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/i-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: IProduct
  @Output() deleted = new EventEmitter<string>()
  @Output() edited = new EventEmitter<IProduct>()
  isEditing = false
  inputState = ""

  deleteProduct(id: string) {
    this.deleted.emit(id)
  }
  editOrSave() {
    if (this.isEditing) {
      this.save()
    }
    this.isEditing = !this.isEditing
  }
  save() {
    this.edited.emit(<IProduct>{ ...this.product, title: this.inputState })
  }



}
