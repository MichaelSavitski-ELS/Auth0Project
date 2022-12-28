import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = '/api/login/';
  }
}
