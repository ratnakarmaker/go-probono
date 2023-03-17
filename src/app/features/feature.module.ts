import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpSectionComponent } from './components/home/help-section/help-section.component';
import { MakeAppointmentComponent } from './components/home/make-appointment/make-appointment.component';
import { PowerOfLawComponent } from './components/home/power-of-law/power-of-law.component';

@NgModule({
    declarations: [ HomeComponent, HelpSectionComponent, MakeAppointmentComponent, PowerOfLawComponent],
    exports: [HomeComponent]
})

export class FeatureModule {}