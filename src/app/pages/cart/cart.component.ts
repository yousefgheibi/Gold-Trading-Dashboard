import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductListModel} from "../../models/productlist.model";
import {ProductModel} from "../../models/product.model";
import {CartServiceService} from "../../services/cart-service.service";
import {share, shareReplay} from "rxjs";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  public products: ProductListModel = {};
  selectedRow !: any;
  show: boolean = false;
  totalPrice: number = 0;

  constructor(private cartService: CartServiceService,
              public dialog: MatDialog) {
    this.show = this.cartService.show;
  }

  ngOnInit(): void {
    this.cartService.productList
      .subscribe(res => {
          this.products = res;
          for (let id in res) {
            let value = res[id];
          }
          this.calculatePrice();
        },
      );
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
    this.show = false;
  }

  addMore(product: ProductModel) {
    this.cartService.addMore(product);
  }

  removeFromProductList(product: ProductModel) {
    this.cartService.removeFromProductList(product);
  }

  private calculatePrice() {
    this.totalPrice = 0;
    for (let id in this.products) {
      if(this.products[id] && this.products[id][0] && this.products[id].length ) {
        this.totalPrice = this.totalPrice + this.products[id][0].price * this.products[id].length;
      }
    }
  }
}
