import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product, Vehicles } from 'src/app/models/product';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Vehicles[];
  productListLength;
  productsGroup: Product[];
  lowValue = 0;
  highValue = 12;

  constructor(private productService: ProductService) { }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  ngOnInit() {
    const productList = [];
    this.productService.getAllProducts().subscribe(products => {
      this.productsGroup = products;
      products.forEach(value => {
        const eleVehicles: any = value.cars.vehicles;
        productList.push(...eleVehicles);
        this.productList = productList;
        this.productListLength = productList.length;
      });
    });

  }
}
