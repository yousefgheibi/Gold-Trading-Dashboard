import { Component, OnInit } from '@angular/core';
import { InvioceModel } from 'src/app/models/invoice.model';
import { InvoiceApiService } from 'src/app/services/invoice-api.service';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})
export class FactorsComponent implements OnInit {

  invoiceList : InvioceModel []= [];
  IsWait : boolean = false;
  constructor(private _invoiceApi : InvoiceApiService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this._invoiceApi.getInvoices().subscribe(res => {
      this.invoiceList = res;
      this.IsWait = true;
    });
  }

}
