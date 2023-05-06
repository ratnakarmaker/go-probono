import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  protected navs: any[] = [
    {
      id: 1,
      title: 'Profile',
    },
    {
      id: 2,
      title: 'My Appointments',
    },
    {
      id: 3,
      title: 'Call History',
    },
    {
      id: 4,
      title: 'Logout',
    },
  ];

  protected current_nav_id: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  routeChange() {
    switch (this.current_nav_id) {
      case 1:
        this.router.navigate(['profile']);
        break;
      case 2:
        this.router.navigate(['appointments'], { relativeTo: this.route });
        break;
      case 3:
        this.router.navigate(['call-history'], { relativeTo: this.route });
        break;
      case 4:
        this.storage.clearStorage();
        this.router.navigate(['']);
        break;
      default:
        break;
    }
  }
}
