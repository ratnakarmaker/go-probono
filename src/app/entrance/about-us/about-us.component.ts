import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  aboutData: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.list('REGULAR_PAGE_API').subscribe((response: any) => {
      this.aboutData = response[0];
    });
  }
}
