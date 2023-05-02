import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  protected members: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getTeamMembers();
  }

  getTeamMembers() {
    this.api.list('TEAM_API').subscribe((response: any) => {
      this.members = response?.map((tada: any) => {
        return {
          ...tada,
          image_src: tada?.thumbnail,
          title: tada?.name,
          subtitles: [tada?.designation],
          text_position: 'outside',
        };
      });
    });
  }
}
