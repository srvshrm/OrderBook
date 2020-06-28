import { Product } from './product.model';
import { Cart } from '../cart/cart.model';
import { EventEmitter } from '@angular/core';

export class ProductsService {
    private products: Product[] = [
        new Product('Milk', 50, 'https://cdn.pixabay.com/photo/2019/10/22/07/45/milk-carton-4567937_960_720.png'),
        new Product('Bread', 30,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_XLKu6oFF4xI66IdYevWDEkbmO2AD2zrzwyZTIpY4T3X0kkfb&usqp=CAU')
      ];

    private cart: Cart[] = [];
    cartChanged = new EventEmitter<Cart[]>();

    getProducts() {
        return this.products.slice();
    }

    addToCart(cartProduct: Cart) {
        this.cart.push(cartProduct);
        this.cartChanged.emit(this.cart.slice());
    }

    getCart() {
        return this.cart.slice();
    }
}
