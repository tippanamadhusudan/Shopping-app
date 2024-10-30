import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ProductsPageComponent }
];
