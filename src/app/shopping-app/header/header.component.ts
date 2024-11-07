import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  productsService = inject(ProductsService);
  router = inject(Router);
  
  myForm: FormGroup = new FormGroup({ 
    myInput: new FormControl('')
  }); 

  searchProduct() {
    this.productsService.searchProducts(this.myForm.get('myInput')?.value);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
