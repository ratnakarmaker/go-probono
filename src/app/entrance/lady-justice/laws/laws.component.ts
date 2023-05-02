import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss'],
})
export class LawsComponent implements OnInit {
  lawList: any[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getLaws();
  }

  getLaws() {
    this.api.list('LAW_LIST_API').subscribe((response: any) => {
      this.lawList = response?.map((tada: any) => {
        return {
          ...tada,
          title: tada?.name,
          id: tada?.slug,
        };
      });
    });
  }
}
