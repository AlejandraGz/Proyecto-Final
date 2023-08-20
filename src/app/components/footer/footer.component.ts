import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router, private app: AppComponent){}
  navigateToHome() {
    this.router.navigate([''])
    window.scrollTo(0, 0);
    this.app.showHome = true;
    this.app.showLogin = false;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = false;
  }

}
