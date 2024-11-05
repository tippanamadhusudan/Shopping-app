import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  activateRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  product: Product | null | undefined = null;
  
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let productId = params.get('id');
      console.log('id: ', productId);
      if(productId) {
        // Make an api call usind id to get the product details
        console.log(this.productsService.products);
        this.product = this.productsService.products?.find(product => product.id === parseInt(productId));
        console.log(this.product);
      }
    });
  }
}
