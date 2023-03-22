import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Law {
  header: string;
  subtitle: string;
  description: string;
  id?: number;
}

@Component({
  selector: 'app-main-laws',
  templateUrl: './main-laws.component.html',
  styleUrls: ['./main-laws.component.css'],
})
export class MainLawsComponent implements OnInit {
  lawList: Law[] = [
    {
      id: 1,
      header: 'Law 1',
      subtitle: 'Law 1 Law 1',
      description:
        'Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1Law 1',
    },
  ];

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {}

  lawDescription(law: Law) {
    this.router.navigate([`../major/${law?.id}`], { relativeTo: this.route });
  }

  lawListView(law: Law) {
    this.router.navigate([`../act`], {
      relativeTo: this.route,
      queryParams: { major_id: law?.id },
    });
  }

  advocateListView(law: Law) {
    this.router.navigate(['../../advocate'], {
      relativeTo: this.route,
      queryParams: { major_id: law?.id },
    });
  }
}
