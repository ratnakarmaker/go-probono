import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

interface Act {
  id?: number;
  question: string;
  eng_answer: string;
}

@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.scss'],
})
export class LawListComponent {
  page: number = 10;

  actList: Act[] = [];
  majorList: any[] = [];

  protected text_search: string = '';
  protected law_search: number = 0;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeParamSearchGet();
    this.getMajorLaws();
  }

  routeParamSearchGet() {
    this.route.queryParams.subscribe((params: any) => {
      this.text_search = params?.text ?? '';
      this.law_search = params?.law ?? 0;
      this.getAllLaws();
    });
  }

  search(source: 'text' | 'law') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { text: this.text_search, law: this.law_search },
    });
  }

  getAllLaws() {
    this.api
      .list('KNOW_YOUR_LAW_API', {
        text: this.text_search,
        law: this.law_search,
      })
      .subscribe((response: any) => {
        this.actList = response;
      });
  }

  getMajorLaws() {
    this.api.list('LAW_LIST_API').subscribe((response: any) => {
      this.majorList = [{ id: 0, name: 'All' }, ...response];
    });
  }
}
