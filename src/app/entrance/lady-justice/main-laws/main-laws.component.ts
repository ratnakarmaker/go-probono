import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-main-laws',
  templateUrl: './main-laws.component.html',
  styleUrls: ['./main-laws.component.scss'],
})
export class MainLawsComponent {
  lawList: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected api: ApiService
  ) {}

  ngOnInit(): void {
    this.getMainLaws();
  }

  lawDescription(law: any) {
    this.router.navigate([`../main-laws/${law?.id}`], {
      relativeTo: this.route,
    });
  }

  lawListView(law: any) {
    this.router.navigate([`../law-list`], {
      relativeTo: this.route,
      queryParams: { law: law?.id },
    });
  }

  advocateListView(law: any) {
    this.router.navigate(['../../advocates'], {
      relativeTo: this.route,
      queryParams: { law: law?.id },
    });
  }

  getMainLaws() {
    this.api.list('LAW_LIST_API').subscribe((response: any) => {
      this.lawList = response;
    });
  }
}
