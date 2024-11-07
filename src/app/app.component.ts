import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsPageComponent } from "./shopping-app/products-page/products-page.component";
import { HeaderComponent } from "./shopping-app/header/header.component";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Shopping-App';
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if(user) {
        this.authService.currentUserSig.set({
          email: user.email,
          name: user.displayName
        })
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    })
  }
}
