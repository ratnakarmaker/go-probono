import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.scss'],
})
export class AppointmentSummaryComponent implements OnInit {
  protected pendingAppointments: any[] = [];
  protected approvedAppointments: any[] = [];

  constructor(protected api: ApiService) {}

  ngOnInit(): void {
    this.getAppointments('pending');
    this.getAppointments('approved');
  }

  getAppointments(status: 'pending' | 'approved') {
    this.api
      .list('APPOINTMENT_LIST_API', { status })
      .subscribe((response: any) => {
        switch (status) {
          case 'pending':
            this.pendingAppointments = response;
            break;
          case 'approved':
            this.approvedAppointments = response;
            break;
          default:
            break;
        }
      });
  }
}
