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
          this.router.navigate(['/']);
        }
      });
  }
}
