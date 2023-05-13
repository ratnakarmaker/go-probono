import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-subscription-package',
  templateUrl: './subscription-package.component.html',
  styleUrls: ['./subscription-package.component.scss'],
})
export class SubscriptionPackageComponent implements OnInit {
  protected package: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getPackageDetails();
  }

  getPackageDetails() {
    this.api.list('CURRENT_PAYMENT_PLAN_API').subscribe((response: any) => {
      this.package = response;
    });
  }
}
