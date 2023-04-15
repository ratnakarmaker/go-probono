import { Component } from '@angular/core';
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

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.list('KNOW_YOUR_LAW_API').subscribe((response: any) => {
      this.actList = response;
    });
  }
}
