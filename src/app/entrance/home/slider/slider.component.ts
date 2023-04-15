import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  sliderData: any[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.list('SLIDER_API').subscribe((response: any) => {
      this.sliderData = response;
    });
  }
}
