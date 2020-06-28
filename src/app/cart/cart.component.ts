import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.cart = this.productsService.getCart();
    this.productsService.cartChanged.subscribe(
      (cart: Cart[]) => {
        this.cart = cart;
      }
    );
  }

  toRemoveFromCart(index: number) {
    this.productsService.removeFromCart(index);
  }
}
