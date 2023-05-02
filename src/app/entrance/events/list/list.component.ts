import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  protected events: any[] = [];

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  goTo({ action, data }: { action: any; data: any }) {
    this.router.navigate([`./${data?.slug}`], { relativeTo: this.route });
  }
}
