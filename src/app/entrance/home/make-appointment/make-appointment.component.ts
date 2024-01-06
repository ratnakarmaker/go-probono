import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss'],
})
export class MakeAppointmentComponent implements OnInit {
  protected dataForm: FormGroup;

  protected msg: any = {};
  protected lawyerList: any[] = [];

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.dataForm = fb.group({
      lawyer: [''],
      message: [''],
      start_date: [''],
      end_date: [''],
    });
  }

  ngOnInit(): void {
    this.api.list('LAWYER_LIST_API', {}).subscribe((response: any) => {
      this.lawyerList = response;
    });
  }

  makeAppointment() {
    this.api
      .post('APPOINTMENT_API', this.dataForm.value, {}, 'add/')
      .subscribe((response: any) => {
        this.msg = response;
      });
  }
}
