import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpSectionComponent } from './components/home/help-section/help-section.component';
import { MakeAppointmentComponent } from './components/home/make-appointment/make-appointment.component';
import { PowerOfLawComponent } from './components/home/power-of-law/power-of-law.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselSliderComponent } from './components/home/carousel-slider/carousel-slider.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { FactorialsLawComponent } from './components/home/factorials-law/factorials-law.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderNavbarComponent } from '../components/header-navbar/header-navbar.component';
import { HeaderTopComponent } from '../components/header-top/header-top.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'law',
        loadChildren: () =>
          import('./components/laws/laws.module').then((m) => m.LawsModule),
      },
      {
        path: 'advocate',
        loadChildren: () =>
          import('./components/advocates/advocates.module').then(
            (m) => m.AdvocatesModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HelpSectionComponent,
    MakeAppointmentComponent,
    PowerOfLawComponent,
    CarouselSliderComponent,
    FactorialsLawComponent,
    LandingComponent,
    FooterComponent,
    HeaderNavbarComponent,
    HeaderTopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
    CarouselModule,
  ],
  exports: [HomeComponent],
})
export class FeatureModule {}
