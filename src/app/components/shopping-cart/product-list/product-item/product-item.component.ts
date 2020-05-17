import { Component, OnInit, Input } from '@angular/core';
import { Product, Vehicles } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { CartAddedModalComponent } from '../../cart/cart-added-modal/cart-added-modal.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Vehicles[];

  @Input() productsGroup: Product[];

  // MatPaginator Inputs
  public length = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private dialog: MatDialog

  ) { }

  ngOnInit() {
  }
  checkAddedCart(id){
    return this.cartService.checkCartAdded(id);
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem);
    this.msg.sendMsg(this.productItem);
    this.dialog.open(CartAddedModalComponent);
  }
  viewdetails(productItem) {
    if (productItem.licensed) {
      const GroupedData = this.productsGroup
        .filter((element: any) =>
          element.cars.vehicles.some((subElement) => subElement._id === productItem._id))
        .map((element: any) => {
          const newElt = Object.assign({}, element);
          const filteredData = newElt.cars.vehicles.filter(subelement => subelement._id === productItem._id);
          newElt.vehicles = filteredData[0];
          return newElt;
        });
      this.dialog.open(ProductDetailComponent, {
        data: GroupedData[0]
      });
    }
  }
}
