import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductListModel } from 'src/app/models/productlist.model';
import { CartComponent } from '../../cart/cart.component';
import * as momentJalaali from "moment-jalaali";
import { InvioceModel } from 'src/app/models/invoice.model';
import { ProductModel } from 'src/app/models/product.model';
@Component({
  selector: 'app-show-factor',
  templateUrl: './show-factor.component.html',
  styleUrls: ['./show-factor.component.scss']
})
export class ShowFactorComponent implements OnInit {

  public products: ProductListModel = {};
  public totalPrice : number = 0;
  public now : string = '';
  public customerName : string = '';

  constructor(public dialogRef : MatDialogRef<CartComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any) {
      this.products = data.row;
      this.totalPrice = data.totalPrice;
      
     }

  ngOnInit(): void {
    this.now = momentJalaali().format('jYYYY/jM/jD');
    
  }

  sendData(created_at: string ,name: string) {

    const invoice : InvioceModel = {
      name,
      items : this.products,
      created_at

    }

    console.log(invoice);
  }

}
