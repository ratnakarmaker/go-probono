import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { PaymentPlanListComponent } from './payment-plan-list/payment-plan-list.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppointmentListComponent,
    PaymentPlanListComponent,
    PaymentProcessComponent,
    PaymentHistoryComponent,
    AppointmentDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LawyerProfileModule {}
