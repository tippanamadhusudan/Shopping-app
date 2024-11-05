import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  productsService = inject(ProductsService);
  
  myForm: FormGroup = new FormGroup({ 
    myInput: new FormControl('')
  }); 

  searchProduct() {
    this.productsService.searchProducts(this.myForm.get('myInput')?.value);
  }

}
