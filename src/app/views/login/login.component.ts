import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private app: AppComponent){}
  navigateToChangePassword() {
    this.router.navigate(['/cambiar-contrasena'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showLogin = false;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = true;
  }

}
