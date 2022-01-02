import { Component, OnInit } from '@angular/core';
import { InvioceModel } from 'src/app/models/invoice.model';
import { InvoiceApiService } from 'src/app/services/invoice-api.service';
import { NotificationService } from 'src/app/services/notification.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})
export class FactorsComponent implements OnInit {
  q : any;
  searchKey : string = '';
  invoiceList : InvioceModel []= [];
  IsWait : boolean = false;
  fileName = new Date().toISOString().slice(0, 10);
  constructor(private _invoiceApi : InvoiceApiService, private _notification : NotificationService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this._invoiceApi.getInvoices().subscribe(res => {
      this.invoiceList = res;
      this.IsWait = true;
    });
  }

  deleteFactor(row: any) {
    let c = confirm("آیا از حذف کردن این فاکتور اطمینان دارید ؟");
    if (c) {
      this._invoiceApi.deleteFacors(row.id).subscribe(res => {
          this._notification.success("فاکتور با موفقیت حذف شد.");
          this.getInvoices();
        },
        (err) => {
          this._notification.warn("با مشکلی روبه برو شدیم.");
        })
    }
  }


  doSearch(searchKey : string) {
    let result : InvioceModel[] = [];
    if(searchKey.length > 2) {
      result = this.invoiceList.filter((item) => {
        // @ts-ignore
        return !(item.name.trim().indexOf(this.searchKey.trim()) <= -1);
      });
    }
    if(result.length > 0 ){
      this.invoiceList = result;
    }
    else{
        this.getInvoices();
    }
  }

  clearSearch(){
    this.searchKey = "";
  }

  exportExcel():void{
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName +'.xlsx');

  }


}
