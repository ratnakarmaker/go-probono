import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  public toasts: any[] = [];

  private show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  constructor() {}

  showSuccess(message: string) {
    this.show(message, { classname: 'bg-success text-light', delay: 5000000 });
  }

  showDanger(message: any) {
    this.show(message, { classname: 'bg-danger text-light', delay: 5000000 });
  }

  remove(toast?: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts = [];
  }
}
