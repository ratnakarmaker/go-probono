import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/commons/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    title: '',
  },
  {
    path: ':/id',
    component: DetailsComponent,
    title: '',
  },
];

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentModule],
})
export class TeamMembersModule {}
