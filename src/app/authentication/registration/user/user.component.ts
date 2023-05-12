import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() open: boolean = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected dataForm: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private fb: FormBuilder
  ) {
    this.dataForm = fb.group({
      email: [''],
      name: [''],
      password: [''],
      gender: ['Male'],
      mobile: [''],
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => {
      s.unsubscribe();
    });
  }

  ngOnInit(): void {}

  register() {
    let tempSubs = this.api
      .post('REGISTER_API', this.dataForm.value, {}, 'user/')
      .subscribe((responseReg: any) => {
        if (responseReg?.success) {
          this.api
            .post('LOGIN_API', {
              password: this.dataForm.value?.password,
              mobile: this.dataForm.value?.mobile,
            })
            .subscribe((responseLog: any) => {
              if (responseLog?.success) {
                this.storage.setToken(responseLog?.token);
                // this.router.navigate(['/']);
              }
            });
        }
      });
    this.subscriptions.push(tempSubs);
  }
}
