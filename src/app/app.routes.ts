import { Routes } from '@angular/router';
import { LandingPageComponent } from './main/landing-page/landing-page.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { AddToCartComponent } from './main/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './main/checkout/checkout.component';
import { CartComponent } from './main/cart/cart.component';

export const routes: Routes = [
    {
        path:'', component: LandingPageComponent
    },
    {
        path:'categories', component: CategoriesComponent
    },
    {
        path:'add-to-cart', component: AddToCartComponent
    },
    {
        path:'cart', component: CartComponent
    },
    {
        path:'checkout', component: CheckoutComponent
    }
];
