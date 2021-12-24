import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product.model';
import { ProductApiService } from 'src/app/services/product-api.service';
import { NewProductComponent } from './new-product/new-product.component';
import {NotificationService} from "../../services/notification.service";
import {EditProductComponent} from "./edit-product/edit-product.component";

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
  selectedrow : any;

  constructor(private _productApi : ProductApiService,public dialog : MatDialog , private _notificationService : NotificationService) { }

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

  onCreateProduct() {
    this.dialog.open(NewProductComponent);
    const getNewProduct = setInterval(() => {
      this.getProduct();
    }, 2000);
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

  deleteProduct(row: any){
    let c = confirm("آیا از حذف کردن این محصول اطمینان دارید ؟");
    if (c) {
      this._productApi.deleteProduct(row.id).subscribe(res=>{
        this._notificationService.success('محصول با موفقیت حذف شد.');
        this.getProduct();
      });
    }
  }

  editProduct(row :any){
    this.selectedrow = row;
    this.dialog.open(EditProductComponent,{
      width:'800px',
      data : {
        id : this.selectedrow.id,
        brand : this.selectedrow.brand,
        name : this.selectedrow.name,
        weight : this.selectedrow.weight,
        caret : this.selectedrow.caret,
        comment : this.selectedrow.comment,
        image : this.selectedrow.image,
        stock : this.selectedrow.stock,
        hire : this.selectedrow.hire
      }
    });
    setInterval(()=>{
      this.getProduct();
    },1000);
  }
}
