import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  protected navs: any[] = [
    {
      id: 'laws',
      title: 'Law',
    },
    {
      id: 'kyls',
      title: 'Q/A',
    },
    {
      id: 'lawyers',
      title: 'Lawyers',
    },
    {
      id: 'events',
      title: 'Events',
    },
    {
      id: 'teams',
      title: 'Our Team',
    },
  ];

  protected current_tab_id: string = 'laws';

  protected search_result: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRouteParameters();
  }

  getRouteParameters() {
    this.route.queryParams.subscribe((param: any) => {
      this.search(param?.text);
    });
  }

  search(search_string: string) {
    this.api
      .list('GLOBAL_SEARCH_API', {}, search_string + '/')
      .subscribe((response: any) => {
        this.search_result = {
          laws: response?.laws?.map((tada: any) => {
            return {
              ...tada,
              image_src: tada?.thumbnail,
              title: tada?.name,
              description: tada?.headline,
            };
          }),
          kyls: response?.kyls?.map((tada: any) => {
            return {
              ...tada,
              image_src: tada?.thumbnail,
              title: tada?.name,
              description: tada?.headline,
            };
          }),
          lawyers: [],
          events: response?.events?.map((tada: any) => {
            return {
              ...tada,
              image_src: tada?.thumbnail,
              title: tada?.name,
              description: tada?.brief_description,
            };
          }),
          teams: response?.teams?.map((tada: any) => {
            return {
              ...tada,
              image_src: tada?.thumbnail,
              title: tada?.name,
              text_position: 'outside',
            };
          }),
        };
      });
  }

  goTo({ action, data }: { action: any; data: any }) {
    switch (this.current_tab_id) {
      case 'laws':
        this.router.navigate([`lady-justice/main-laws/${data?.slug}`]);
        break;
      case 'events':
        this.router.navigate([`events/${data?.slug}`]);
        break;
      case 'teams':
        this.router.navigate([`team-members/${data?.slug}`]);
        break;
      default:
        break;
    }
  }
}
