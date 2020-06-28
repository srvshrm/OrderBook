import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductsService } from './products.service';
import { Cart } from '../cart/cart.model';

@ Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  toAddToCart(name: string, price: number, imagePath: string, quantity: number) {
    const newCart = new Cart(name, price, imagePath, quantity);
    this.productsService.addToCart(newCart);
  }

}
