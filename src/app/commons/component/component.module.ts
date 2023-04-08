import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import {
  NgbAccordionModule,
  NgbCarouselModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { NavsComponent } from './navs/navs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CarouselComponent,
    PaginationComponent,
    AccordionComponent,
    NavsComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    CarouselComponent,
    PaginationComponent,
    AccordionComponent,
    NavsComponent,
  ],
})
export class ComponentModule {}
