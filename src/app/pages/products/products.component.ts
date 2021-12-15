import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  IsWait : Boolean = false;
  public productData : ProductModel[] = [];
  
  constructor(private _productApi : ProductApiService) { }

  ngOnInit(): void {
    this.getProduct();
    
  
  }

  getProduct(){
    this._productApi.getProduct().subscribe(
      res=>{
        this.productData = res;
        console.log(this.productData);
        this.IsWait = true;
    })
  }


}
