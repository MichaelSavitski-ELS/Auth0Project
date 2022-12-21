import { AuthButtonComponent } from './auth-button/auth-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthButtonComponent],
  exports: [AuthButtonComponent],
})
export class SharedModule { }
