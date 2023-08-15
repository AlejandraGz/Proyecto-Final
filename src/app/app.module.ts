import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista-de-productos', component: ListOfProductsComponent},
  {path: 'iniciar-sesion', component: LoginComponent},
  {path: 'contacto', component: ContactComponent},
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
