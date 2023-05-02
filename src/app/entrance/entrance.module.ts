import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ComponentModule } from '../commons/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        title: 'Home',
      },
      {
        path: 'lady-justice',
        loadChildren: () =>
          import('./lady-justice/lady-justice.module').then(
            (m) => m.LadyJusticeModule
          ),
        title: 'Justice',
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
        title: 'Contact Us',
      },
      {
        path: 'advocates',
        loadChildren: () =>
          import('./advocates/advocates.module').then((m) => m.AdvocatesModule),
        title: 'Advocates',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
        title: 'Profile',
      },
      {
        path: 'search-result',
        loadChildren: () =>
          import('./search-result/search-result.module').then(
            (m) => m.SearchResultModule
          ),
        title: 'Search Result',
      },
    ],
  },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
})
export class EntranceModule {}
