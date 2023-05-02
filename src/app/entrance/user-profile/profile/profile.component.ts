import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  protected profile_state: 'view' | 'edit' = 'view';

  protected profile: any;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.api.list('PROFILE_API').subscribe((response: any) => {
      this.profile = response;
    });
  }

  swapState(new_state: 'view' | 'edit') {
    this.profile_state = new_state;
    this.getProfile();
  }
}
