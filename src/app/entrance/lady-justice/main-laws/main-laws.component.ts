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

  protected buttons: any[] = [
    {
      action: 'description',
      icon: 'eye',
      tooltip: 'Law Description',
      class: 'btn-primary',
    },
    {
      action: 'laws',
      icon: 'book',
      tooltip: 'Q/A List',
      class: 'btn-secondary',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected api: ApiService
  ) {}

  ngOnInit(): void {
    this.getMainLaws();
  }

  protected buttonClicked({ action, data }: { action: string; data: any }) {
    switch (action) {
      case 'description':
        this.lawDescription(data);
        break;
      case 'laws':
        this.lawListView(data);
        break;
      default:
        break;
    }
  }

  lawDescription(law: any) {
    this.router.navigate([`../main-laws/${law?.slug}`], {
      relativeTo: this.route,
    });
  }

  lawListView(law: any) {
    this.router.navigate([`../law-list`], {
      relativeTo: this.route,
      queryParams: { law: law?.slug },
    });
  }

  advocateListView(law: any) {
    this.router.navigate(['../../advocates'], {
      relativeTo: this.route,
      queryParams: { law: law?.slug },
    });
  }

  getMainLaws() {
    this.api.list('LAW_LIST_API').subscribe((response: any) => {
      this.lawList = response?.map((tada: any) => {
        return {
          ...tada,
          image_src: tada?.thumbnail,
          title: tada?.name,
          description: tada?.headline,
        };
      });
    });
  }
}
