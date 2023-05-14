import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnChanges, OnDestroy {
  protected genderList: any[] = [
    {
      opt_key: 'Male',
      opt_text: 'Male',
    },
    {
      opt_key: 'Female',
      opt_text: 'Female',
    },
  ];
  protected zoneList: {
    division: any[];
    district: any[];
    thana: any[];
  } = {
    division: [],
    district: [],
    thana: [],
  };
  protected paymentPlans: any[] = [];
  protected lawTypes: any[] = [];
  @Input() profile: any;

  @Output() c_change: EventEmitter<any> = new EventEmitter<any>();

  protected dataForm: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, protected api: ApiService) {
    this.dataForm = fb.group({
      email: [''],
      name: [''],
      password: [''],
      gender: ['Male'],
      mobile: [''],
      apartment: [''],
      street_address: [''],
      area_slug: new FormControl({ value: '', disabled: true }),
      latitude: [''],
      longitude: [''],
      payment_plan: [''],
      nid_or_tradelicense: [''],
      bar_council_number: [''],
      lawyer_category: [''],
      division: [''],
      district: new FormControl({ value: '', disabled: true }),
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => {
      s.unsubscribe();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['profile']?.currentValue) {
      this.dataForm.patchValue({
        ...this.profile?.address,
        ...this.profile,
        division: this.profile?.address?.division_slug,
        district: this.profile?.address?.district_slug,
        area_slug: this.profile?.address?.thana_slug,
      });
      console.log(this.dataForm.value);
    }
  }
  ngOnInit(): void {
    this.getZones();
    this.getPaymentPlans();
    this.getLawCategories();
    this.dependencies();
  }

  dependencies() {
    let temp1 = this.dataForm
      .get('division')
      ?.valueChanges.subscribe((result: any) => {
        let district: AbstractControl | null = this.dataForm.get('district');
        let thana: AbstractControl | null = this.dataForm.get('area_slug');
        district?.setValue('');
        thana?.setValue('');
        if (result) {
          district?.enable({ emitEvent: false });
          this.getZones('district', result);
        } else {
          district?.disable({ emitEvent: false });
        }
      });
    let temp2 = this.dataForm
      .get('district')
      ?.valueChanges.subscribe((result: any) => {
        let thana: AbstractControl | null = this.dataForm.get('area_slug');
        thana?.setValue('');
        if (result) {
          thana?.enable({ emitEvent: false });
          this.getZones('thana', result);
        } else {
          thana?.disable({ emitEvent: false });
        }
      });
    if (temp1) this.subscriptions.push(temp1);
    if (temp2) this.subscriptions.push(temp2);
  }

  getZones(parent?: 'district' | 'thana', slug?: string) {
    let tempSubs = this.api
      .list('ZONE_API', {}, slug)
      .subscribe((response: any) => {
        this.zoneList[parent ?? 'division'] = response;
      });
    this.subscriptions.push(tempSubs);
  }

  getPaymentPlans() {
    let tempSubs = this.api
      .list('PAYMENT_PLANS_API')
      .subscribe((response: any) => {
        this.paymentPlans = response;
      });
    this.subscriptions.push(tempSubs);
  }

  getLawCategories() {
    let tempSubs = this.api
      .list('LAWYER_LIST_API', {}, 'categories/')
      .subscribe((response: any) => {
        this.lawTypes = response;
      });
    this.subscriptions.push(tempSubs);
  }

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
