import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallerComponent } from './caller/caller.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CallerComponent,
    title: '',
  },
];

@NgModule({
  declarations: [CallerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContactUsModule {}
