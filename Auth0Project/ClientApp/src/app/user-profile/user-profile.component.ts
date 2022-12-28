import { UserProfile } from './../models/user-profile';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userProfile = {} as UserProfile;

  constructor(public userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.userProfile = await this.userService.getUserProfile();
  }

}
