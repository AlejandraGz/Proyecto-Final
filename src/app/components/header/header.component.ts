import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private app: AppComponent){}
  navigateToHome() {
    this.router.navigate([''])
    window.scrollTo(0, 0);
    this.app.showHome = true;
    this.app.showLogin = false;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = false;
    this.app.showBrunch = false;
    this.app.showDesserts = false;
    this.app.showFastFood = false;
    this.app.showRestaurant = false;
  }
  navigateToLogin() {
    this.router.navigate(['iniciar-sesion'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showLogin = true;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = false;
  }
  navigateToBrunch() {
    this.router.navigate(['/brunch'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showBrunch = true;
    this.app.showDesserts = false;
    this.app.showFastFood = false;
    this.app.showRestaurant = false;
  }
  navigateToFastFood() {
    this.router.navigate(['/rapidas'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showBrunch = false;
    this.app.showDesserts = false;
    this.app.showFastFood = true;
    this.app.showRestaurant = false;
  }
  navigateToDesserts() {
    this.router.navigate(['/postres'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showBrunch = false;
    this.app.showDesserts = true;
    this.app.showFastFood = false;
    this.app.showRestaurant = false;
  }
  navigateToRestaurant() {
    this.router.navigate(['/restaurante'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showBrunch = false;
    this.app.showDesserts = false;
    this.app.showFastFood = false;
    this.app.showRestaurant = true;
  }

}
