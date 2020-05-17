import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items = [];

  addProductToCart(product) {
    this.items.push(product);
  }

  getCartItems() {
    return this.items;
  }
  removeCartById(id){
    return this.items = this.items.filter(item => item._id !== id);
  }
  checkCartAdded(id) {
    return this.items.some(item => item._id === id);
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
