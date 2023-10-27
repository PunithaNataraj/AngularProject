import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../cart-items.service';
import { DataAccessService, IProduct } from '../data-access.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[] = [];

  constructor(public dataService: DataAccessService, public cartService: CartItemsService) { }
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

}
