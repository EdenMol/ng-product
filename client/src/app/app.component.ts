import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { IProduct } from './types/i-product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  window = window;

  ngOnInit(){
    // this.navigate()
  }
  constructor(private route: Router,private location: Location) {
  }
  navigate() {
    const endpoint = window.location.href.includes('products-list') ? '/create-product' : '/products-list'

    this.route.navigateByUrl(endpoint)
  }

}
