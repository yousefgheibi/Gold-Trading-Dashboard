import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductListModel } from 'src/app/models/productlist.model';
import { FactorsComponent } from '../factors.component';

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.scss']
})
export class FactorComponent implements OnInit {
  factor !: any;
  items : ProductListModel = {};
  constructor(public dialogRef : MatDialogRef<FactorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any) {
      this.factor = data;
      this.items = data.items;
     }

  ngOnInit(): void {
    
  }

}
 