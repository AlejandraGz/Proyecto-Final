import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurante';
  showHome: boolean = true;
  showBrunch: boolean = false;
  showDesserts: boolean = false;
  showFastFood: boolean = false;
  showRestaurant: boolean = false;
  showLogin: boolean = false;
  showProducts: boolean = false;
  showContact: boolean = false;
  showChangePassword: boolean = false;

  ngOnInit() {
    this.showHome = true;
    this.showLogin = false;
    this.showProducts = false;
    this.showContact = false;
    this.showChangePassword = false;
  }
}
