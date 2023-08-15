import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.scss'],
})
export class AppointmentSummaryComponent implements OnInit {
  protected pendingAppointments: any[] = [];
  protected dueAppointments: any[] = [];

  constructor(protected api: ApiService) {}

  ngOnInit(): void {
    this.getAppointments('pending');
    this.getAppointments('due');
  }

  getAppointments(status: 'pending' | 'due') {
    this.api
      .list('APPOINTMENT_LIST_API', { status })
      .subscribe((response: any) => {
        switch (status) {
          case 'pending':
            this.pendingAppointments = response;
            break;
          case 'due':
            this.dueAppointments = response;
            break;
          default:
            break;
        }
      });
  }
}
