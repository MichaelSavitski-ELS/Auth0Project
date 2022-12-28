import { AuthButtonComponent } from './auth-button/auth-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthButtonComponent, LoginComponent],
  exports: [AuthButtonComponent, LoginComponent],
})
export class SharedModule { }
