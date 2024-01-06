import { ComponentModule } from './../../commons/component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { FactorialLawComponent } from './factorial-law/factorial-law.component';
import { HelpSectionComponent } from './help-section/help-section.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { PowerOfLawComponent } from './power-of-law/power-of-law.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { AppointmentSummaryComponent } from './laweyar/appointment-summary/appointment-summary.component';
import { SubscriptionPackageComponent } from './laweyar/subscription-package/subscription-package.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: '',
  },
];

@NgModule({
  declarations: [
    SliderComponent,
    FactorialLawComponent,
    HelpSectionComponent,
    MakeAppointmentComponent,
    PowerOfLawComponent,
    LandingComponent,
    TeamsComponent,
    AppointmentSummaryComponent,
    SubscriptionPackageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
