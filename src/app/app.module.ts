import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { ContactComponent } from './views/contact/contact.component';
import { ListOfProductsComponent } from './views/list-of-products/list-of-products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangePasswordComponent } from './views/login/change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { BrunchComponent } from './views/list-of-products/brunch/brunch.component';
import { FastFoodComponent } from './views/list-of-products/fast-food/fast-food.component';
import { DessertsComponent } from './views/list-of-products/desserts/desserts.component';
import { RestaurantComponent } from './views/list-of-products/restaurant/restaurant.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brunch', component: BrunchComponent},
  {path: 'postres', component: DessertsComponent},
  {path: 'rapidas', component: FastFoodComponent},
  {path: 'restaurante', component: RestaurantComponent},
  {path: 'iniciar-sesion', component: LoginComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'cambiar-contrasena', component: ChangePasswordComponent},
  {path: 'carrito-de-compras', component: ShoppingCartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ShoppingCartComponent,
    ContactComponent,
    ListOfProductsComponent,
    HeaderComponent,
    FooterComponent,
    ChangePasswordComponent,
    BrunchComponent,
    FastFoodComponent,
    DessertsComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
