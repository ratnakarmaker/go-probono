import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-factorial-law',
  templateUrl: './factorial-law.component.html',
  styleUrls: ['./factorial-law.component.scss'],
})
export class FactorialLawComponent implements OnInit {
  slideData: any[] = [];
  options: any = {
    show_count: 5,
    dration: 1000,
  };

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.list('LAW_LIST_API').subscribe((response: any) => {
      this.slideData = response?.map((tada: any) => {
        return {
          ...tada,
          image_src: tada?.thumbnail,
          title: tada?.image_text,
          description: tada?.headline,
        };
      });
    });
  }
}
