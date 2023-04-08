import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLawsComponent } from './main-laws/main-laws.component';
import { LawListComponent } from './law-list/law-list.component';
import { LawDetailsComponent } from './law-details/law-details.component';
import { Routes, RouterModule } from '@angular/router';
import {
  NgbAccordionModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormFieldsModule } from 'src/app/commons/form-fields/form-fields.module';
import { ComponentModule } from 'src/app/commons/component/component.module';

const routes: Routes = [
  {
    path: 'main-laws',
    component: MainLawsComponent,
    title: 'Major Laws',
  },
  {
    path: 'law-list',
    component: LawListComponent,
    title: 'Laws',
  },
  {
    path: 'main-laws/:id',
    component: LawDetailsComponent,
    title: '',
  },
  {
    path: 'law-list/:id',
    component: LawDetailsComponent,
    title: '',
  },
];

@NgModule({
  declarations: [MainLawsComponent, LawListComponent, LawDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    NgbAccordionModule,
    FormFieldsModule,
    ComponentModule,
  ],
})
export class LadyJusticeModule {}
