import { Vehicles } from './product';

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: DoubleRange;

  constructor(id: number, Vehicles: Vehicles, qty = 1) {
    this.id = id;
    this.productId = Vehicles._id;
    this.productName = Vehicles.make;
    this.price = Vehicles.price;
    this.qty = qty;
  }
}
