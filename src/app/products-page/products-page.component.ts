import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  productsService = inject(ProductsService);
  router = inject(Router);

/****************************** EXPLANATION ****************************************  */

  /**
   * When user is searching for a product, we send what user enters to backend and recieve response with the results matching what user enters
   * In ngOnInit we can use form valueChanges properties and make an api call when user enters a value,
   * but it is inefficient because searchProduct get triggered for every letter user enters.
   * so I used keydown.enter so that searchProduct method only triggers when user clicked enter.
   * This saves us from making redundent api calls. 
   */
  
  goToProductPage(id: number) {
    this.router.navigate(['/product', id]);
  }
}
