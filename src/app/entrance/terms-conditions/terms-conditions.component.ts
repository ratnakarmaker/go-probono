import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  termsData: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.list('REGULAR_PAGE_API').subscribe((response: any) => {
      this.termsData = response[1];
      console.log(this.termsData);
    });
  }
}
