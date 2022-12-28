import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { noop } from 'rxjs';

export interface LoginTemplate {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  login(userName: string, password: string) {
    const body = {
      userName: userName,
      password: password,
    } as LoginTemplate;

    this.httpClient.post(this.baseUrl + 'login', body).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
