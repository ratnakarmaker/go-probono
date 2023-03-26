import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CarouselComponent, PaginationComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [CarouselComponent, PaginationComponent],
})
export class ComponentModule {}
