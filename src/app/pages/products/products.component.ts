import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';
import { NewProductComponent } from './new-product/new-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  p : any;
  IsWait : Boolean = false;
  public productData : ProductModel[] = [];
  searchKey : string | undefined;
  constructor(private _productApi : ProductApiService,public dialog : MatDialog) { }

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


  onCreateProduct(){
    this.dialog.open(NewProductComponent);
  }

  doSearch(searchKey : string) {
    let result : ProductModel[] = [];
    if(searchKey.length > 2) {
      result = this.productData.filter((item) => {
        // @ts-ignore
        return !(item.name.trim().indexOf(this.searchKey.trim()) <= -1);
      });
    }
    if(result.length > 0 ){
      this.productData = result;
    }
    else{
        this.getProduct();
    }
  }



}
