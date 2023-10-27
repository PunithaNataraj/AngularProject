import { computed, Injectable, signal } from '@angular/core';
import { DataAccessService, IProduct } from './data-access.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  public cartItems = signal<IProduct[]>([]);
  public products: IProduct[] = [];
  public subTotal = computed(() => this.cartItems().reduce((prev: any, curr: IProduct) => {
    return prev + curr.price;
  }, 0));
  public totalItems = computed(() => this.cartItems().length);

  constructor(public dataService: DataAccessService) { }

  addProduct(product: IProduct) {
    this.cartItems.mutate(val => {
      val.push(product);
    })
  }
}
