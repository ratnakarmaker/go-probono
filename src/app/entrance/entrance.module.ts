import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ComponentModule } from '../commons/component/component.module';
import { AuthGuardGuard } from '../guards/auth-guard.guard';

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
        canActivate: [AuthGuardGuard],
        data: {
          guard_data: {
            have_token: true,
          },
        },
      },
      {
        path: 'advocates',
        loadChildren: () =>
          import('./advocates/advocates.module').then((m) => m.AdvocatesModule),
        title: 'Advocates',
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
        title: '',
        canActivate: [AuthGuardGuard],
        data: {
          guard_data: {
            have_token: true,
          },
        },
      },
      {
        path: 'lawyer',
        loadChildren: () =>
          import('./lawyer-profile/lawyer-profile.module').then(
            (m) => m.LawyerProfileModule
          ),
        title: '',
      },
      {
        path: 'search-result',
        loadChildren: () =>
          import('./search-result/search-result.module').then(
            (m) => m.SearchResultModule
          ),
        title: 'Search Result',
      },
      {
        path: 'team-members',
        loadChildren: () =>
          import('./team-members/team-members.module').then(
            (m) => m.TeamMembersModule
          ),
        title: 'Team',
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsModule),
        title: 'Events',
      },
    ],
  },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
})
export class EntranceModule {}
