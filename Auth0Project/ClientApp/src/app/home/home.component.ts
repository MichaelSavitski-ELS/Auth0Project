import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public auth: AuthService) { }

  isLoggedIn(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}
