import { HttpClient } from '@angular/common/http';
import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CartItemsService } from '../cart-items.service';
import { DataAccessService, IProduct } from '../data-access.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
  productsData: any;
  productstemp: any;
  selectedCategory: any ="-Select-";
  categorytemp: any;
  categorylist: any;
  NewProductList: any;
  searchText: any;
  constructor(public dataService: DataAccessService, public cartService: CartItemsService, private http: HttpClient) {
    this.productsData = toSignal<IProduct[]>(this.http.get<IProduct[]>("http://localhost:3000/products"));
  }
  ngOnInit(): void {
    this.categorytemp = computed(() => this.productsData().map((x: any) => x.category));
    this.categorylist = computed(() => this.categorytemp().filter((n: any, i: any) => this.categorytemp().indexOf(n) === i));
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }
  applyFilter() {
    this.productstemp =this.productsData;
    if (this.selectedCategory != 0) {      
      this.productsData =computed(() => this.productstemp().filter((val: any) => val.category.includes(this.selectedCategory)));
    }
  }
}

