import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';

@ Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    new Product("Milk", 50, "https://cdn.pixabay.com/photo/2019/10/22/07/45/milk-carton-4567937_960_720.png"),
    new Product("Bread", 30,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_XLKu6oFF4xI66IdYevWDEkbmO2AD2zrzwyZTIpY4T3X0kkfb&usqp=CAU")
  ];
  constructor() { }

  ngOnInit() {
  }

}
