import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.scss'],
})
export class LawyerComponent {
  @Input() open: boolean = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected dataForm: FormGroup;
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

  protected msg: string = '';

  private subscriptions: Subscription[] = [];

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private fb: FormBuilder,
    private router: Router
  ) {
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

  register() {
    let tempSubs = this.api
      .post('REGISTER_API', this.dataForm.value, {}, 'lawyer/')
      .subscribe((responseReg: any) => {
        if (responseReg?.success) {
          this.msg = 'Succesfully Applied. Please wait for confirmation';
        }
      });
    this.subscriptions.push(tempSubs);
  }
}
