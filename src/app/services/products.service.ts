import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, of, shareReplay } from 'rxjs';
import { Products } from '../../mock/products';
import { Product } from '../models/product.model';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] | null = null;
  showingAllProducts: boolean = true;
  productsInCart: Product[] = [];
  productsCollection: any;

  /********************************** EXPLANATION ************************************ */

  /**
   * Here i am using Behaviour subject and using it to wrap an api response so that it does not get called indefentely when changing tabs.
   * By doing this I can directly use this observable in html template which simplifies the code.
   */
  productsSubject = new BehaviorSubject<any[]>([]);
  productsSubject$ = this.productsSubject.pipe(mergeMap(() => this.getProducts()));


  constructor(firestore: Firestore) { 
    this.productsCollection = collection(firestore, 'products');
    this.getProducts();
  }


  /** Mocking api response */
  getProducts() : Observable<any[]> {
    if(!this.products) {
      // Make an api call here to get products
      let data = collectionData(this.productsCollection, {
        idField: 'id'
      }) as Observable<any>;
      data.subscribe(el => {
        console.log('response: ', el);
      });
      this.products = Products;
    }
    return of(this.products);
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

  addToCart(id: number | undefined) {
    let product = this.products?.find(product => product.id == id);
    console.log(product);
    if(product) this.productsInCart.push(product);
    console.log(this.productsInCart);
  }

  deleteFromCart(id: number) {
    let remainingProducts = this.productsInCart?.filter(product => product.id !== id);
    if(remainingProducts?.length > 0) {
      this.productsInCart = JSON.parse(JSON.stringify(remainingProducts));
    } else {
      this.productsInCart = [];
    }
  }
}
