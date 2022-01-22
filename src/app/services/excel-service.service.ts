import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  fileName = new Date().toISOString().slice(0, 10);
  constructor() { }


  download_csv(data: any) {
    var csv ='نام مشتری , قیمت کل , تاریخ خرید' + '\n';
    for (let item of data) {
      csv += item.name + ` , ` + item.totalPrice + ` , ` + item.created_at;
      csv += "\n";
  
    }

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = this.fileName +'.csv';
    hiddenElement.click();
  }


}