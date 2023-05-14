import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { PaymentPlanListComponent } from './payment-plan-list/payment-plan-list.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ComponentModule } from 'src/app/commons/component/component.module';
import { FormFieldsModule } from 'src/app/commons/form-fields/form-fields.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingComponent,
  //   title: '',
  //   children: [

  //   ],
  // },
  {
    path: 'appointments',
    component: AppointmentListComponent,
    title: 'Appointments',
  },
  {
    path: 'appointment/:id',
    component: AppointmentDetailsComponent,
    title: 'Appointment',
  },
  {
    path: 'payment-history',
    component: PaymentHistoryComponent,
    title: 'Payment History',
  },
  {
    path: 'change-plan',
    component: PaymentPlanListComponent,
    title: 'Change Payment Plan',
  },
  {
    path: 'make-payment',
    component: MakePaymentComponent,
    title: 'Make Payment',
  },
];

@NgModule({
  declarations: [
    AppointmentListComponent,
    PaymentPlanListComponent,
    PaymentHistoryComponent,
    AppointmentDetailsComponent,
    LandingComponent,
    MakePaymentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ComponentModule,
    FormFieldsModule,
  ],
})
export class LawyerProfileModule {}
