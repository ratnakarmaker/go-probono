import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { NavsComponent } from './navs/navs.component';

@NgModule({
  declarations: [CarouselComponent, PaginationComponent, AccordionComponent, NavsComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [CarouselComponent, PaginationComponent],
})
export class ComponentModule {}
