import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit {
  protected appointment: any;
  protected chosenDate: string = '';

  constructor(
    protected api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAppointment();
  }
  getAppointment() {
    this.api
      .list(
        'APPOINTMENT_LIST_API',
        {},
        this.route.snapshot.paramMap.get('id') ?? ''
      )
      .subscribe((response: any) => {
        this.appointment = response;
        this.chosenDate = response?.chosen_date;
      });
  }
  changeStatus(status: 'approved' | 'rejected') {
    this.api
      .post('APPOINTMENT_STATUS_CHANGE_API', {
        appointment_id: this.appointment?.id,
        status,
        chosen_date: this.chosenDate,
      })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
