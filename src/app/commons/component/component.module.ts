import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import {
  NgbAccordionModule,
  NgbCarouselModule,
  NgbPaginationModule,
  NgbToastModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { NavsComponent } from './navs/navs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { MenuHolderComponent } from './menu-holder/menu-holder.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    CarouselComponent,
    PaginationComponent,
    AccordionComponent,
    NavsComponent,
    SlideShowComponent,
    PageContainerComponent,
    GridCardsComponent,
    MenuHolderComponent,
    CustomCardComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbToastModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    CarouselComponent,
    PaginationComponent,
    AccordionComponent,
    NavsComponent,
    SlideShowComponent,
    PageContainerComponent,
    GridCardsComponent,
    MenuHolderComponent,
    CustomCardComponent,
    SnackbarComponent,
  ],
})
export class ComponentModule {}
