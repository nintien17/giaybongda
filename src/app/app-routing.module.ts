import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "contact", component:ContactComponent},
  {path: "shop", component:ShopComponent},
  {path: "detail", component:ProductDetailComponent},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
export const RoutingComponent = [HomeComponent, ContactComponent, ShopComponent, ProductDetailComponent,LoginComponent,RegisterComponent];