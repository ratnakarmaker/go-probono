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

  protected menu_lists_user: any[] = [
    {
      name: 'Make Appointments',
      route: 'user/make-appointment',
    },
    {
      route: 'lady-justice/laws',
      name: 'Know Your Law',
    },
    {
      route: 'contact-us',
      name: 'Help Center',
    },
    {
      route: 'events',
      name: 'Events',
    },
    {
      route: 'team-members',
      name: 'Our Team',
    },
  ];

  protected menu_lists_lawyer: any[] = [
    {
      name: 'Appointments',
      route: 'lawyer/appointments?status=approved',
    },
    {
      route: 'lawyer/change-plan',
      name: 'Payment Plan',
    },
    {
      route: 'lawyer/payment-history',
      name: 'Payment History',
    },
    {
      route: 'lawyer/make-payment',
      name: 'Make Payment',
    },
  ];

  protected search_text: string = '';

  bios_state: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected storage: StorageService
  ) {}

  changePath(data: any) {
    if (data?.id === 1) {
      if (this.storage?.getUser()?.['type'] === 'User') {
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['lawyer']);
      }
    } else if (data?.id === 2) {
      this.storage.clearStorage();
      this.router.navigate(['']);
    }
  }

  login() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }

  search() {
    this.router.navigate(['/search-result'], {
      queryParams: { text: this.search_text },
    });
  }

  appointment() {
    this.router.navigate(['user/appointments']);
  }

  sideRoutes(path: string) {
    this.bios_state = false;
    this.router.navigate([path]);
  }
}
