import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { noop } from 'rxjs';

export interface LoginTemplate {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string) {
    const body = {
      userName: userName,
      password: password,
    } as LoginTemplate;

    this.httpClient.post('/api/login/login', body).subscribe(noop, error => console.error(error));
  }
}
