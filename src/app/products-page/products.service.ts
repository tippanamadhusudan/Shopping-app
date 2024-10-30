import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, of, shareReplay } from 'rxjs';
import { Products } from '../../mock/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any = null;
  showingAllProducts: boolean = true;

  /********************************** EXPLANATION ************************************ */

  /**
   * Here i am using Behaviour subject and using it to wrap an api response so that it does not get called indefentely when changing tabs.
   * By doing this I can directly use this observable in html template which simplifies the code.
   */
  productsSubject = new BehaviorSubject<any[]>([]);
  productsSubject$ = this.productsSubject.pipe(mergeMap(() => this.getProducts()));

  constructor() { }

  /** Mocking api response */
  getProducts() : Observable<any[]> {
    console.log('api call made');
    this.products = Products;
    return of(Products);
  }

  /** Instead of making an api call to get filtered products, doing the filtering here. It is similar to mocking the api response*/
  searchProducts(value: string) {
    this.products = Products;
    if(!value) {
      this.showingAllProducts = true;
      return;
    }
    this.products = this.products?.filter((product: any) => {
      if(product.name?.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      return false;
    });
    this.showingAllProducts = false;
    console.log(this.products);
  }
}
