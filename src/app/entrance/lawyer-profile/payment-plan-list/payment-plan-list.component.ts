import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-payment-plan-list',
  templateUrl: './payment-plan-list.component.html',
  styleUrls: ['./payment-plan-list.component.scss'],
})
export class PaymentPlanListComponent implements OnInit {
  protected paymentPlans: any[] = [];

  protected current_plan_id: number | null = null;
  protected selected_plan_id: number | null = null;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getPaymentPlans();
    this.getCurrentPlan();
  }

  getPaymentPlans() {
    this.api.list('PAYMENT_PLANS_API').subscribe((response: any) => {
      this.paymentPlans = response;
    });
  }

  getCurrentPlan() {
    this.api.list('CURRENT_PAYMENT_PLAN_API').subscribe((response: any) => {
      this.current_plan_id = response?.current_payment_plan_id;
    });
  }

  setPaymentPlan() {
    this.api
      .post('PAYMENT_PLAN_CHANGE_API', {
        chosen_payment_plan: this.selected_plan_id,
      })
      .subscribe((response: any) => {});
  }
}
