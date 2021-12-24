import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product.model';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {


  formValue !: FormGroup;
  productModelObj : ProductModel = new ProductModel();

  constructor(private _productapi:ProductApiService , private formbuilder : FormBuilder,
    private notificationService : NotificationService,
    public dialogRef: MatDialogRef<NewProductComponent>) { }


  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      id: (null),
      name: [''],
      brand: [''],
      weight: [''],
      caret: [''],
      comment: [''],
      hire: ['']
    });
  }
  saveProduct(){
      this.productModelObj.name = this.formValue.value.name;
      this.productModelObj.weight = this.formValue.value.weight;
      this.productModelObj.brand = this.formValue.value.brand;
      this.productModelObj.caret = this.formValue.value.caret;
      this.productModelObj.comment = this.formValue.value.comment;
      this.productModelObj.hire = this.formValue.value.hire;

      this._productapi.postProduct(this.productModelObj)
        .subscribe(res=>{
            console.log(res);
            this.notificationService.success('محصول با موفقیت اضافه شد.');
            this.formValue.reset();
            this.dialogRef.close();

          },
          (err)=>{
            console.log(err);
            this.notificationService.warn('مشکلی پیش آمد.');
            this.dialogRef.close();
          })
    }
  onReset(){
    this.formValue.reset();
  }
  onChange(event : any ){
    const files = event.target.files;
    console.log(files);
  }

}
