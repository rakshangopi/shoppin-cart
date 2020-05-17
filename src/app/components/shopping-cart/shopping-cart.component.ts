import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productsData: any;

  constructor(private productService: ProductService) { }

   ngOnInit() {
    this.productService.loadProducts().subscribe((products) => {
      this.productService.saveData(products);
    });
  }

}
