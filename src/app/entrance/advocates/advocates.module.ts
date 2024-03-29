import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvocateListComponent } from './advocate-list/advocate-list.component';
import { AdvocateDetailsComponent } from './advocate-details/advocate-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdvocateListComponent,
    title: '',
  },
  {
    path: ':id',
    component: AdvocateDetailsComponent,
    title: '',
  },
];

@NgModule({
  declarations: [AdvocateListComponent, AdvocateDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdvocatesModule {}
