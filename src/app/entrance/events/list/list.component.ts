import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  protected events: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.api.list('EVENT_API').subscribe((response: any) => {
      this.events = response?.map((tada: any) => {
        return {
          ...tada,
          image_src: tada?.thumbnail,
          title: tada?.name,
          description: tada?.brief_description,
        };
      });
    });
  }
}
