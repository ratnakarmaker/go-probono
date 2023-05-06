import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-caller',
  templateUrl: './caller.component.html',
  styleUrls: ['./caller.component.scss'],
})
export class CallerComponent implements OnInit {
  help_center_data: any;

  constructor(protected api: ApiService) {}

  ngOnInit(): void {
    this.getCallCenterRules();
  }

  getCallCenterRules() {
    this.api.list('HELP_CENTER_RULES_API').subscribe((response: any) => {
      this.help_center_data = response;
    });
  }

  call() {
    window.open(`tel:\*+88${this.help_center_data?.helpline}#`, '_self');
  }
}
