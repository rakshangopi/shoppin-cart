import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-added-modal.component.html',
  styleUrls: ['./cart-added-modal.component.css']
})
export class CartAddedModalComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<CartAddedModalComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
}

}
