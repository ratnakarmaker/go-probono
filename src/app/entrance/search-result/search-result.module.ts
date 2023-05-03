import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/commons/component/component.module';
import { LawsComponent } from './laws/laws.component';
import { KylComponent } from './kyl/kyl.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { EventComponent } from './event/event.component';
import { TeamComponent } from './team/team.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: '',
  },
];

@NgModule({
  declarations: [
    LandingComponent,
    LawsComponent,
    KylComponent,
    LawyerComponent,
    EventComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    NgbAccordionModule,
  ],
})
export class SearchResultModule {}
