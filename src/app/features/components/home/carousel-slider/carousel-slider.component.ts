import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css'],
})
export class CarouselSliderComponent implements OnInit {
  isBrowser: boolean;
  screenSize: any;

  // apiData!: PhotosApi;
  limit: number = 10;

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object // private http: HttpClient,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.screenSize = window.innerWidth;
    // this.fetch();
  }

  // fetch() {
  //   const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
  //   const http$ = this.http.get<PhotosApi>(api);

  //   http$.subscribe(
  //     res => this.apiData = res,
  //     err => throwError(err)
  //   )
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSize = window.innerWidth;
  }
}
