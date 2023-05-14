import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  protected header: string = '';
  protected appointmentList: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected api: ApiService
  ) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs?.unsubscribe();
    });
  }
  ngOnInit(): void {
    let tempSubs = this.route.queryParams.subscribe((rou) => {
      this.current_nav_id = rou?.['status'];
      this.getAppointmentList(rou);
      this.header =
        rou?.['status']?.[0].toUpperCase() + rou?.['status'].slice(1);
    });
    this.subscriptions.push(tempSubs);
  }
  protected navs: any[] = [
    {
      id: 'approved',
      title: 'Approved',
    },
    {
      id: 'pending',
      title: 'Pending',
    },
    {
      id: 'rejected',
      title: 'Rejected',
    },
    {
      id: 'due',
      title: 'Due',
    },
  ];
  protected current_nav_id: string = '';
  routeChange(nav: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { status: nav?.id },
    });
  }
  getAppointmentList(query: any) {
    let tempSub = this.api
      .list('APPOINTMENT_LIST_API', query)
      .subscribe((response: any) => {
        this.appointmentList = response;
      });
    this.subscriptions.push(tempSub);
  }
  details(appointment: any) {
    this.router.navigate([`${appointment?.id}`], { relativeTo: this.route });
  }
}
