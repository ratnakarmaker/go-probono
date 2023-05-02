import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/commons/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: '',
  },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentModule],
})
export class SearchResultModule {}
