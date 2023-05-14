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
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './profile/view/view.component';
import { EditComponent } from './profile/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: 'appointments',
    component: AppointmentListComponent,
    title: 'Appointments',
  },
  {
    path: 'appointments/:id',
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
    ProfileComponent,
    ViewComponent,
    EditComponent,
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
