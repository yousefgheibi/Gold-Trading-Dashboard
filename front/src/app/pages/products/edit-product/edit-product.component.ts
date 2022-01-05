import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductModel} from "../../../models/product.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductApiService} from "../../../services/product-api.service";
import {NotificationService} from "../../../services/notification.service";
import {ProductsComponent} from "../products.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  recievedrow !:any;
  formValue !: FormGroup;
  productModelObj : ProductModel = new ProductModel();

  constructor(private _notificationService : NotificationService,
              private formBuilder : FormBuilder,private _productApi : ProductApiService,
              public dialogRef : MatDialogRef<ProductsComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any) {
    this.recievedrow =data;
  }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      id : this.recievedrow.id,
      name : this.recievedrow.name,
      brand : this.recievedrow.brand,
      weight : this.recievedrow.weight,
      caret : this.recievedrow.caret,
      comment : this.recievedrow.comment,
      image : this.recievedrow.image,
      price : this.recievedrow.price
    });
  }

  updateDetails(){
    this.productModelObj.id = this.recievedrow.id;
    this.productModelObj.name = this.formValue.value.name;
    this.productModelObj.brand = this.formValue.value.brand;
    this.productModelObj.weight = this.formValue.value.weight;
    this.productModelObj.caret = this.formValue.value.caret;
    this.productModelObj.comment = this.formValue.value.comment;
    this.productModelObj.price = this.formValue.value.price;

    this._productApi.updateProduct(this.productModelObj,this.productModelObj.id)
      .subscribe(res=>{
        this._notificationService.success('محصول با موفقیت بروز شد.');
        this.formValue.reset();
        this.dialogRef.close();
      });
  }

  onClose(){
    this.dialogRef.close();
  }
}
