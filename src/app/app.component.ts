import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsPageComponent } from "./products-page/products-page.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping-App';
}
