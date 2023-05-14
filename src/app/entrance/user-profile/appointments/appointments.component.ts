import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  protected appointmentList: any[] = [];

  constructor(
    protected api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getAppointmentList();
  }

  getAppointmentList() {
    this.api.list('USER_APPOINTMENT_API').subscribe((response: any) => {
      this.appointmentList = response;
    });
  }

  details(data: any) {
    this.router.navigate([`${data?.id}`], { relativeTo: this.route });
  }
}
