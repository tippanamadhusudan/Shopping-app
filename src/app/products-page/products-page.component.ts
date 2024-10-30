import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {
  productsService = inject(ProductsService);
  cd = inject(ApplicationRef);

  myForm: FormGroup = new FormGroup({ 
    myInput: new FormControl('')
  }); 
  
  ngOnInit() { 
    console.log(this.myForm);
    // this.myForm.get('myInput')?.valueChanges.subscribe(value => {
    //   console.log(value);
    //   this.searchProduct();
    // });
  }

/****************************** EXPLANATION ****************************************  */

  /**
   * When user is searching for a product, we send what user enters to backend and recieve response with the results matching what user enters
   * In ngOnInit we can use form valueChanges properties and make an api call when user enters a value,
   * but it is inefficient because searchProduct get triggered for every letter user enters.
   * so I used keydown.enter so that searchProduct method only triggers when user clicked enter.
   * This saves us from making redundent api calls. 
   */
  searchProduct() {
    this.productsService.searchProducts(this.myForm.get('myInput')?.value);
  }
}
