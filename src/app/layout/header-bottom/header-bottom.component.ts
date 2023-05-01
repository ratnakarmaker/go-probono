import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
})
export class HeaderBottomComponent {
  protected nav_list: any[] = [
    {
      id: 1,
      title: 'Profile',
    },
    {
      id: 2,
      title: 'Logout',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected storage: StorageService
  ) {}

  changePath(data: any) {
    if (data?.id === 1) {
    } else if (data?.id === 2) {
    }
  }

  login() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
