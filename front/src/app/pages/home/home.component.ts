import { Component, OnInit } from '@angular/core';
import { InvioceModel } from 'src/app/models/invoice.model';
import { ProductModel } from 'src/app/models/product.model';
import { InvoiceApiService } from 'src/app/services/invoice-api.service';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productData: ProductModel[] = [];
  factorData: InvioceModel[] = [];
  constructor(private _productApi: ProductApiService, private _invoiceApi : InvoiceApiService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getFacors();
  }


  getProduct() {
    this._productApi.getProduct().subscribe(
      res => {
        this.productData = res;
      })
  }

  getFacors() {
    this._invoiceApi.getInvoices().subscribe(
      res => {
        this.factorData = res;
      }
    )
  }
}
