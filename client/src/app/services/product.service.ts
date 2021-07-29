import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../types/i-product';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[];
  productsUrl = environment.USER_SERVICE_BASE_URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {
  }

  getProducts() {
    return this.httpClient.get<IProduct[]>(this.productsUrl + '/products').pipe(map((products: IProduct[]) => products.slice(0, 4)));
  }

  addProduct(title: string) {
    this.httpClient.post<IProduct>(this.productsUrl + '/create-product', { title }, this.httpOptions)
      .subscribe((product: IProduct) => {
        this.products.push(product);
      });
  }

  deleteProduct(id: string) {
    if (!id) return;
    this.httpClient.delete<IProduct>
      (`${this.productsUrl}/delete-product/${id}`)
      .subscribe(
        (deletedProduct) => {
          this.products = this.products.filter(item => item._id !== deletedProduct._id);
        });
  }

  saveProduct(product: IProduct) {
    const indexOfProd = this.products.findIndex(item => item._id === product._id);
    this.products.splice(indexOfProd, 1, product);

    this.httpClient.put<IProduct>
      (`${this.productsUrl}/update-product`, { product }, this.httpOptions)
      .subscribe()
      ;
  }
}
