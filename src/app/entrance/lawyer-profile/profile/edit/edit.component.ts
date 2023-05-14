import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnChanges {
  protected genderList: any[] = [
    {
      opt_key: 'Male',
      opt_text: 'Male',
    },
    {
      opt_key: 'Female',
      opt_text: 'Female',
    },
    {
      opt_key: 'Transgender',
      opt_text: 'Transgender',
    },
  ];
  @Input() profile: any;

  @Output() c_change: EventEmitter<any> = new EventEmitter<any>();

  protected dataForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.dataForm = fb.group({
      name: [''],
      email: [''],
      gender: [''],
      street_address: [''],
      mobile: [''],
      apartment: [''],
      city: [''],
      country: [''],
      dob: [''],
      password: [''],
      latitude: [''],
      longitude: [''],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['profile']?.currentValue) {
      this.dataForm.patchValue(this.profile);
    }
  }
  ngOnInit(): void {}

  save() {
    this.api
      .post('PROFILE_UPDATE_API', this.dataForm.value)
      .subscribe((response: any) => {
        if (response?.success) {
          this.back();
        }
      });
  }

  back() {
    this.c_change.emit();
  }
}
