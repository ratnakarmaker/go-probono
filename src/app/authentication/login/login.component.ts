import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected dataForm: FormGroup;

  protected mult: any[] = [];
  protected dataList: any[] = [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    },
    {
      id: 4,
      name: 'd'
    },
    {
      id: 5,
      name: 'e'
    },
    {
      id: 6,
      name: 'f'
    },
    {
      id: 7,
      name: 'g'
    },
    {
      id: 8,
      name: 'h'
    },
    {
      id: 9,
      name: 'i'
    },
    {
      id: 10,
      name: 'j'
    }
  ]

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private storage: StorageService,
    private router: Router
  ) {
    this.dataForm = fb.group({
      mobile: [''],
      password: [''],
    });
  }

  login() {
    this.api
      .post('LOGIN_API', this.dataForm.value)
      .subscribe((responseLog: any) => {
        if (responseLog?.success) {
          this.storage.setToken(responseLog?.token);
          this.storage.setUser({ type: responseLog?.type });
          if (responseLog?.msg === 'Payment is required') {
            this.router.navigate(['lawyer/make-payment']);
          } else {
            this.router.navigate(['/']);
          }
        }
      });
  }
}
