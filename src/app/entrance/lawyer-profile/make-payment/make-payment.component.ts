import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent implements OnInit {
  protected paymentData: any;
  protected dataForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.dataForm = fb.group({
      payment_method_id: [''],
      amount: [''],
      transaction_number: [''],
    });
  }
  ngOnInit(): void {
    this.getPaymentData();
  }

  sendMoney() {
    this.api
      .post('PAYMENT_SUBMIT_API', this.dataForm.value)
      .subscribe((response: any) => {
        this.getPaymentData();
      });
  }

  getPaymentData() {
    this.api.list('CURRENT_PAYMENT_PLAN_API').subscribe((response: any) => {
      this.paymentData = response;
      // response?.last_payment_history?.chosen_payment_plan?.id
      this.dataForm.get('payment_method_id')?.setValue(1);
    });
  }
}
