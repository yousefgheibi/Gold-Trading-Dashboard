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
  ProductModelObj : ProductModel = new ProductModel();

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

}
