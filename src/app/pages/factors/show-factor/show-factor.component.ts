import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductListModel } from 'src/app/models/productlist.model';
import { CartComponent } from '../../cart/cart.component';
import * as momentJalaali from "moment-jalaali";
import { InvioceModel } from 'src/app/models/invoice.model';
import { InvoiceApiService } from 'src/app/services/invoice-api.service';
import { NotificationService } from 'src/app/services/notification.service';
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
    @Inject(MAT_DIALOG_DATA) public data : any , private _invoiceApi : InvoiceApiService,
    private notificationService :NotificationService ) {
      
      this.products = data.row;
      this.totalPrice = data.totalPrice;
      
     }

  ngOnInit(): void {
    this.now = momentJalaali().format('jYYYY/jM/jD - HH:mm');
    
  }

  postInvoice(created_at: string ,name: string) {

    const invoice : InvioceModel = {
      name,
      items : this.products,
      created_at,
      totalPrice : this.totalPrice
    }

    this._invoiceApi.postInvoice(invoice).subscribe(res => {
      this.notificationService.success('فاکتور با موفقیت ذخیره شد.');
      this.dialogRef.close();
    },
    (err) =>{
      this.notificationService.warn('مشکلی پیش آمد.');
      this.dialogRef.close();
    });
  }
}
