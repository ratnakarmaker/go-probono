import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss'],
})
export class MakeAppointmentComponent implements OnInit {
  protected dataForm: FormGroup;
  protected searchForm: FormGroup;

  protected divisionList: any[] = [];
  protected districtList: any[] = [];
  protected thanaList: any[] = [];
  protected lawyerTypeList: any[] = [];
  protected lawyerList: any[] = [];

  protected msg: any = {};

  private subscriptions: Subscription[] = [];

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.dataForm = fb.group({
      lawyer: [''],
      message: [''],
      start_date: [''],
      end_date: [''],
    });
    this.searchForm = fb.group({
      division: [''],
      district: new FormControl({ value: '', disabled: true }),
      thana: new FormControl({ value: '', disabled: true }),
      lawyer_type: [[]],
    });
  }

  ngOnInit(): void {
    this.formDependency();
    this.getZones();
    this.getLawyerList('', []);
    this.getLawyerCategories();
  }

  formDependency() {
    let temp_div = this.searchForm.get('division');
    let temp_dis = this.searchForm.get('district');
    let temp_tha = this.searchForm.get('thana');
    let temp_typ = this.searchForm.get('lawyer_type');
    let temp1 = temp_div?.valueChanges.subscribe((fv: any) => {
      temp_tha?.setValue('');
      temp_tha?.disable();
      if (fv) {
        temp_dis?.enable();
        this.getZones('district', fv);
      } else {
        temp_dis?.setValue('');
        temp_dis?.disable();
      }
    });
    let temp2 = temp_dis?.valueChanges.subscribe((fv: any) => {
      if (fv) {
        temp_tha?.enable();
        this.getZones('thana', fv);
      } else {
        temp_tha?.setValue('');
        temp_tha?.disable();
      }
    });
    let temp3 = temp_tha?.valueChanges.subscribe((fv: any) => {
      if (fv) {
        this.getLawyerList(fv, []);
      }
    });
    let temp4 = temp_typ?.valueChanges.subscribe((fv: any) => {
      if (fv) {
        this.getLawyerList('', fv);
      }
    });
    if (temp1) {
      this.subscriptions.push(temp1);
    }
    if (temp2) {
      this.subscriptions.push(temp2);
    }
    if (temp3) {
      this.subscriptions.push(temp3);
    }
    if (temp4) {
    }
  }

  getZones(parent?: 'district' | 'thana', slug?: string) {
    let tempSubs = this.api
      .list('ZONE_API', {}, slug ?? '')
      .subscribe((response: any) => {
        if (parent === 'district') {
          this.districtList = response;
        } else if (parent === 'thana') {
          this.thanaList = response;
        } else {
          this.divisionList = response;
        }
      });
    this.subscriptions.push(tempSubs);
  }

  getLawyerCategories() {
    let tempSubs = this.api
      .list('LAWYER_LIST_API', {}, 'categories/')
      .subscribe((response: any) => {
        this.lawyerTypeList = response;
      });
    this.subscriptions.push(tempSubs);
  }

  getLawyerList(area: string, types: any[]) {
    if (!area) {
      area = this.searchForm.value?.thana;
    }
    if (!types?.length) {
      types = this.searchForm.value?.lawyer_type;
    }
    this.api
      .list('LAWYER_LIST_API', {
        ...(area ? { area_slug: area } : {}),
        ...(types
          ? {
              expertise: types?.reduce(
                (pV: string, cV: any) => `${pV ? pV + ',' : pV}${cV}`,
                ''
              ),
            }
          : {}),
      })
      .subscribe((response: any) => {
        this.lawyerList = response;
      });
  }

  makeAppointment() {
    let types: any = this.searchForm.value?.lawyer_type;
    this.api
      .post(
        'APPOINTMENT_API',
        {
          ...this.dataForm.value,
          ...(types?.length
            ? {
                expertise: types?.reduce(
                  (pV: string, cV: any) => `${pV ? pV + ',' : pV}${cV}`,
                  ''
                ),
              }
            : {}),
        },
        {},
        'add/'
      )
      .subscribe((response: any) => {
        this.msg = response;
      });
  }
}
