import { Routes } from '@angular/router';
import { ProductsPageComponent } from './shopping-app/products-page/products-page.component';
import { ProductComponent } from './shopping-app/product/product.component';
import { ShoppingCartComponent } from './shopping-app/shopping-cart/shopping-cart.component';
import { LoginComponent } from './shopping-app/login/login.component';

export const routes: Routes = [
    { path: 'home', component: ProductsPageComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
