import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  protected images: any[] = Array.from({ length: 4 }).map(
    (tada: any, i: number) => {
      return {
        caption: `Slide No ${i}`,
        button: {
          text: '',
          path: '',
        },
        img: '../../../../assets/img/banner-1.png',
      };
    }
  );
}
