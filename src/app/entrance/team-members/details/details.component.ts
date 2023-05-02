import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  protected details: any;

  constructor(
    protected api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.api
      .list(
        'TEAM_API',
        {},
        this.route.snapshot.paramMap.get('id')
          ? this.route.snapshot.paramMap.get('id') + '/'
          : ''
      )
      .subscribe((response: any) => {
        this.details = response;
      });
  }

  goTo() {
    window.open(this.details?.portfolio_url);
  }
}
