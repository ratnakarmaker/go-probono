import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  protected teams: any[] = [];
  protected options: any = {
    show_count: 3,
    dration: 1500,
  };
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.api.list('TEAM_API').subscribe((response: any) => {
      this.teams = response?.map((tada: any) => {
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

  membersList() {
    this.router.navigate(['team-members']);
  }
}
