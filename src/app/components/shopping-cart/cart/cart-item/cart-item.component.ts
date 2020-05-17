import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;
  @Output() removeCart = new EventEmitter<number>();
  displayedColumns: string[] = ['name', 'year_model', 'price', 'action'];

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.removeCart.emit(id);
  }

}
