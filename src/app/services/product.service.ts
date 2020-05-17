import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { productsUrl } from 'src/app/config/api';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _products$ = new BehaviorSubject<Product[]>([]);

  loadProducts() {
    return this.http.get(productsUrl);
  }
  saveData(data) {
    this._products$.next(data);
  }
  getAllProducts() {
    return this._products$.asObservable();
  }
}
