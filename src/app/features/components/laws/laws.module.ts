import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLawsComponent } from './main-laws/main-laws.component';
import { MainLawDetailsComponent } from './main-law-details/main-law-details.component';
import { LawListComponent } from './law-list/law-list.component';
import { LawDetailsComponent } from './law-details/law-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'major',
    component: MainLawsComponent,
  },
  {
    path: 'major/:id',
    component: MainLawDetailsComponent,
  },
  {
    path: 'act',
    component: LawListComponent,
  },
  {
    path: 'act/:id',
    component: LawDetailsComponent,
  },
];

@NgModule({
  declarations: [
    MainLawsComponent,
    MainLawDetailsComponent,
    LawListComponent,
    LawDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LawsModule {}
