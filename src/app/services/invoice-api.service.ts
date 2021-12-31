import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceApiService {

  constructor(private _http : HttpClient) { }

  getInvoices() {
    return this._http.get<any>("http://localhost:3000/invoices/")
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  postInvoice(data : any) {
    return this._http.post<any>("http://localhost:3000/invoices/",data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

}
