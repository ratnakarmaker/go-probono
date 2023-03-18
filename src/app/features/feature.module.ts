import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpSectionComponent } from './components/home/help-section/help-section.component';
import { MakeAppointmentComponent } from './components/home/make-appointment/make-appointment.component';
import { PowerOfLawComponent } from './components/home/power-of-law/power-of-law.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselSliderComponent } from './components/home/carousel-slider/carousel-slider.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { LawListsComponent } from './components/law-base/law-lists/law-lists.component';
import { MainLawsComponent } from './components/law-base/main-laws/main-laws.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'main-laws',
    component: MainLawsComponent,
  },
  {
    path: 'laws/:id',
    component: LawListsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HelpSectionComponent,
    MakeAppointmentComponent,
    PowerOfLawComponent,
    CarouselSliderComponent,
    LawListsComponent,
    MainLawsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
  ],
})
export class FeatureModule {}
