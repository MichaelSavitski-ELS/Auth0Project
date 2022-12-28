import { firstValueFrom } from 'rxjs';
import { UserProfile } from '../models/user-profile';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AuthService) { }

  async getUserProfile(): Promise<UserProfile> {
    const user = await firstValueFrom(this.auth.getUser());
    return {
      name: user?.name,
    } as UserProfile;
  }

}
