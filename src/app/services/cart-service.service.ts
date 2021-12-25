import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProductModel} from "../models/product.model";
import {ProductListModel} from "../models/productlist.model";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<ProductListModel>({});
  private _productList = this.productList.asObservable();
  list: ProductListModel = {};
  show : boolean = false;
  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCard(product: ProductModel) {
    if (!this.list[product.id]) {
      this.list[product.id] = [];
    }
    this.list[product.id] = this.list[product.id].concat(product)
    this.productList.next(this.list);
    // console.log(this.list);
    this.show =true;

  }

  removeCartItem(product: ProductModel) {
    this.list[product.id] = [];
    this.productList.next(this.list);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.show = false;

  }

  addMore(product: ProductModel) {
    this.list[product.id].push(product);
    this.productList.next(this.list);
  }

  removeFromProductList(product: ProductModel) {
    if (this.list[product.id].length) {
      this.list[product.id].pop();
      this.productList.next(this.list);
    }
  }

}
