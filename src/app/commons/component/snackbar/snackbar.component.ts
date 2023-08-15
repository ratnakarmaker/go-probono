import { Component, TemplateRef } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr/toastr.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  constructor(public toastService: ToastrService) {}

  ngOnInit(): void {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  remove(toast: any) {
    this.toastService.remove(toast);
  }
}
