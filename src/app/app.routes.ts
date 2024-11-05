import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const routes: Routes = [
    { path: 'home', component: ProductsPageComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
