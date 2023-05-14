import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-call-history',
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.scss'],
})
export class CallHistoryComponent implements OnInit {
  protected callHistory: any[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getCallHistory();
  }

  getCallHistory() {
    this.api.list('CALL_HISTORY_API').subscribe((response: any) => {
      this.callHistory = response;
    });
  }
}
