import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private productsService: ProductsService, private router: Router) { }

  products: Product[];
  categories: Product[];

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.category();
  }

  category() {
    this.categories = this.products.filter((object, index) => {
      return index === this.products.findIndex((obj) => {
        return JSON.stringify(obj.category) === JSON.stringify(object.category);
      });
    });
  }

  getProdDashborad(category: string) {
    this.router.navigate(['/dashboard', category]);
  }

}
