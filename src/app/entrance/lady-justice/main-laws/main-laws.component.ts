import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

interface Law {
  header: string;
  subtitle: string;
  description: string;
  id?: number;
}

@Component({
  selector: 'app-main-laws',
  templateUrl: './main-laws.component.html',
  styleUrls: ['./main-laws.component.scss'],
})
export class MainLawsComponent {
  lawList: Law[] = [
    {
      id: 1,
      header: 'অর্থ আইন, ১৯৯৮',
      subtitle: '১৯৯৮ সনের ১৪ নং আইন',
      description:
        'সরকারের আর্থিক প্রস্তাবাবলী কার্যকরকরণ এবং কতিপয় আইন সংশোধনকল্পে প্রণীত আইন',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getMainLaws();
  }

  lawDescription(law: Law) {
    this.router.navigate([`../main-laws/${law?.id}`], {
      relativeTo: this.route,
    });
  }

  lawListView(law: Law) {
    this.router.navigate([`../law-list`], {
      relativeTo: this.route,
      queryParams: { major_id: law?.id },
    });
  }

  advocateListView(law: Law) {
    this.router.navigate(['../../advocates'], {
      relativeTo: this.route,
      queryParams: { major_id: law?.id },
    });
  }

  getMainLaws() {
    this.api.list('LAW_LIST_API').subscribe((response: any) => {});
  }
}
