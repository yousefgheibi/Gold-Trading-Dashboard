import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private _http : HttpClient) { }

  getProduct() {
    return this._http.get<any>("http://localhost:3000/products/")
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  postProduct(data : any) {
    return this._http.post<any>("http://localhost:3000/products/",data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }


}
