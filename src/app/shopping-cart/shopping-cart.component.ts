import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  productsService = inject(ProductsService);
  totalAmount: number = 0;
  
  ngOnInit(): void {
    this.calculateTotalAmount();
  }
  
  calculateTotalAmount() {
    this.totalAmount = 0;
    this.productsService.productsInCart?.forEach(item => {
      this.totalAmount += item.price;
    });
  }

}
