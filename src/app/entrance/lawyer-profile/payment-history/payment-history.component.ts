import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss'],
})
export class PaymentHistoryComponent implements OnInit {
  protected paymentHistory: any[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getPaymentHistory();
  }

  getPaymentHistory() {
    this.api.list('PAYMENT_HISTORY_API').subscribe((response: any) => {
      this.paymentHistory = response;
    });
  }
}
