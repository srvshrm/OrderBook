import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductsService } from './products.service';
import { Cart } from '../cart/cart.model';
import { ActivatedRoute } from '@angular/router';

@ Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.getCategory(this.route.snapshot.params.category);
  }

  getCategory(category: string) {
    this.products = this.products.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
  }

  toAddToCart(name: string, price: number, imagePath: string, quantity: number) {
    const newCart = new Cart(name, price, imagePath, quantity);
    this.productsService.addToCart(newCart);
  }

}
