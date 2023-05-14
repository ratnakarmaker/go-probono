import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs?.unsubscribe();
    });
  }
  ngOnInit(): void {
    let tempSubs = this.route.queryParams.subscribe((rou) => {
      this.current_nav_id = rou?.['status'];
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
}
