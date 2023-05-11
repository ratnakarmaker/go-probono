import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  protected dataForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dataForm = fb.group({
      first_name: [''],
      last_name: [''],
      lawer: [''],
      location: [''],
      law_type: [''],
      message: [''],
    });
  }

}
