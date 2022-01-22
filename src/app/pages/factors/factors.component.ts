import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvioceModel } from 'src/app/models/invoice.model';
import { ExcelServiceService } from 'src/app/services/excel-service.service';
import { InvoiceApiService } from 'src/app/services/invoice-api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { FactorComponent } from './factor/factor.component';
@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.scss']
})
export class FactorsComponent implements OnInit {
  q: any;
  selectedRow: any;
  searchKey: string = '';
  invoiceList: InvioceModel[] = [];
  IsWait: boolean = false;
  newInvoiceObject: any;

  constructor(public dialog: MatDialog,
    private _invoiceApi: InvoiceApiService, private _notification: NotificationService,
    private _excelService: ExcelServiceService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
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

  showFactor(row: any) {
    this.selectedRow = row;
    this.dialog.open(FactorComponent, {
      width: '800px',
      height: '90%',
      data: {
        id: this.selectedRow.id,
        name: this.selectedRow.name,
        created_at: this.selectedRow.created_at,
        totalPrice: this.selectedRow.totalPrice,
        items: this.selectedRow.items
      }
    });
  }

  doSearch(searchKey: string): void {
    let result: InvioceModel[] = [];
    if (searchKey.length > 2) {
      result = this.invoiceList.filter((item) => {
        // @ts-ignore
        return !(item.name.trim().indexOf(this.searchKey.trim()) <= -1);
      });
    }
    if (result.length > 0) {
      this.invoiceList = result;
    }
    else {
      this.getInvoices();
    }
  }

  clearSearch() {
    this.searchKey = "";
  }

  exportExcel(): void {
    this._excelService.download_csv(this.invoiceList);
  }

}
