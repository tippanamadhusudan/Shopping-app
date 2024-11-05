import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: 'home', component: ProductsPageComponent },
    { path: 'product', component: ProductComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
