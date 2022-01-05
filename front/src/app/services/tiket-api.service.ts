import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TiketApiService {

  constructor(private _http:HttpClient) { }

  postTicket(data : any) {
    return this._http.post<any>("http://localhost:3000/tickets/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
}
