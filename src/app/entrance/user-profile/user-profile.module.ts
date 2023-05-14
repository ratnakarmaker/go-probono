import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/commons/component/component.module';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CallHistoryComponent } from './call-history/call-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldsModule } from 'src/app/commons/form-fields/form-fields.module';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: '',
    children: [
      {
        path: '',
        component: ProfileComponent,
        title: 'Profile',
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        title: 'Appointments',
      },
      {
        path: 'call-history',
        component: CallHistoryComponent,
        title: 'Call History',
      },
    ],
  },
  {
    path: 'make-appointment',
    component: MakeAppointmentComponent,
    title: 'Make Appointment',
  },
  {
    path: 'appointments/:id',
    component: AppointmentDetailsComponent,
    title: 'Appointment Details',
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    LandingComponent,
    ViewProfileComponent,
    AppointmentsComponent,
    CallHistoryComponent,
    MakeAppointmentComponent,
    AppointmentDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
  ],
})
export class UserProfileModule {}
