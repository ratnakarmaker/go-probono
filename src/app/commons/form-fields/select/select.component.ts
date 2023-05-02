import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnChanges {
  @Input() c_id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() items: any[] = [];

  @Input() control: AbstractControl<any, any> | any;

  @Output() controlChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  protected sel_val: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['control']?.currentValue) {
      if (this.control instanceof AbstractControl) {
        this.sel_val = this.control.value;
        this.control?.valueChanges?.subscribe((result: any) => {
          this.sel_val = result;
        });
      } else {
        this.sel_val = this.control;
      }
    }
  }

  changeVal(event: any) {
    if (this.control instanceof AbstractControl) {
      this.control.setValue(event?.target?.value);
    }
    this.controlChange.emit(event?.target?.value);
  }
}
