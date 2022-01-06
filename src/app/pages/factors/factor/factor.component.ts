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

  printInvoice() {
    let printContents;
    let popupWin : any;
    printContents = document.getElementById('print-section')?.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <title>Print tab</title>
          <style>
          @font-face {
            font-family: samim;
            src: url(./assets/fonts/irsans.ttf);
         }
          body{
            
            padding : 30px !important;
           
            direction: rtl;
            background: url("../../../../assets/images/factor-background.png");
          
          }
          *:not(mat-icon) {
            font-family: samim !important;
         }
        
          h2{
            font-size: 18px;
            font-weight: bold;
            font-family: "vazir";
            margin-top: 1.2rem;
          }
          .text-box{
            border-radius: 10px;
            border: 1px solid #d1b266;
            background: #fff;
            text-align: right;
            padding: 7px;
            padding-top : 20px;
            padding-right: 20px;
            height: 60px;
            font-weight: bold;
            font-size: 15px;
          }
          
          .table-box{
            border-radius: 10px;
            border: 1px solid #d1b266;
            background: #fff;
            height: 800px;
          }
          input{
            border: none;
            background: #fff;
          }
          
          th{
            font-size: 15px;
          }
          td .product-item{
            font-size: 14px !important;
            padding-top: 6px;
          }
        
          .btn-save{
            background-color: #4fbf2a;
            font-size: 14px;
            margin-left: 10px;
          }
          .btn-print{
            background-color: #cda64b;
            
            font-size: 14px;
          }
        
        
          .sign-box{
            width: 100%;
            height: 200px;
            background: #fff;
            border-radius: 10px;
            border: 1px solid #d1b266;
            text-align: center;
          
          }
          .sign-box p{
            margin-top: 170px;
            font-size: 12px;
          }
          .address{
            margin-top: 50px;
          }
          .address p{
            font-size: 12px;
            font-weight: bold;
          }
          
          ul{
            float: left;
          }
          li{
            font-size: 9px;
            list-style: none;
            font-weight: bold;
          }
          li span{
            float: left;
          }
          .copy-right p{
            font-size: 6px;
          }
          
          .item-img{
            width :30px;
            border-radius: 3px;
            
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}
    
    <div class="row">
      <div class="col-4 sign-box"><p>مهر فروشگاه</p>
      </div>
      <div class="col-4 address text-center">
        <p>آدرس : خیابان امام، پاساژ پارک ، پلاک 724</p>
        <p>تلفن : 33333333-044</p>
        <p>همراه : 09214536991</p>
        <div class="copy-right mt-2">
            <p>نرم افزار حسابداری طلافروشی یارا - <a href="#">www.yarasystem.ir</a></p>
        </div>
      </div>
      <div class="col-4 sign-box"><p>امضا مشتری</p>
      </div>
  </div>

    </body>
      </html>`
    );
    popupWin.document.close();
    
 }

}
 