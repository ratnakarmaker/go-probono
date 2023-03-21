import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpSectionComponent } from './components/home/help-section/help-section.component';
import { MakeAppointmentComponent } from './components/home/make-appointment/make-appointment.component';
import { PowerOfLawComponent } from './components/home/power-of-law/power-of-law.component';
import { FactorialsLawComponent } from './components/home/factorials-law/factorials-law.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    HomeComponent,
    HelpSectionComponent,
    MakeAppointmentComponent,
    PowerOfLawComponent,
    FactorialsLawComponent,
    LoginComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [RouterModule],
  exports: [HomeComponent],
})
export class FeatureModule {}
