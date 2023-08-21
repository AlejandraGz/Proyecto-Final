import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private app: AppComponent){}
  navigateToBrunch() {
    this.router.navigate(['/brunch'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showBrunch = true;
  }
  navigateToFastFood() {
    this.router.navigate(['/rapidas'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showFastFood = true;
  }
  navigateToDesserts() {
    this.router.navigate(['/postres'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showDesserts = true;
  }
  navigateToRestaurant() {
    this.router.navigate(['/restaurante'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showRestaurant = true;
  }
  navigateToContact() {
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showProducts = false;
    this.app.showContact = true;
  }
  navigateToLogin() {
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showProducts = false;
    this.app.showLogin = true;
  }
  ngOnInit() {
    this.router.navigate(['/'])
    this.app.showHome = true;
    this.app.showLogin = false;
    this.app.showProducts = false;
  }

}
