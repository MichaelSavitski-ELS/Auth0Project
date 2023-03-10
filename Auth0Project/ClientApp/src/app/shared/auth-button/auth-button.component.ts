import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit() {
  }

  onClickLogin(): void {
    this.auth.loginWithRedirect();
  }

  onClickLogout(): void {
    this.auth.logout({ returnTo: document.location.origin });
  }

}
