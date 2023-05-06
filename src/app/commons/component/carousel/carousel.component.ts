import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnChanges {
  @Input() images: any[] = [];

  constructor(protected api: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  goTo(url: string) {
    window.open(url);
  }
}
