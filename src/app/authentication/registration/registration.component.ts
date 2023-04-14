import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  protected dataForm: FormGroup;

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

  register() {
    this.api
      .post('REGISTER_API', this.dataForm.value)
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
              }
            });
        }
      });
  }
}
