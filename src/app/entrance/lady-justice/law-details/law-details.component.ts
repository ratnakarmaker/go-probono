import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-law-details',
  templateUrl: './law-details.component.html',
  styleUrls: ['./law-details.component.scss'],
})
export class LawDetailsComponent implements OnInit {
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
        'LAW_LIST_API',
        {},
        this.route.snapshot.paramMap.get('id')
          ? this.route.snapshot.paramMap.get('id') + '/'
          : ''
      )
      .subscribe((response: any) => {
        this.details = response;
      });
  }
}
