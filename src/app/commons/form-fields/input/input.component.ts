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
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @Input() c_id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  @Input() control: AbstractControl<any, any> | any;

  @Output() controlChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  protected inp_val: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['control']?.currentValue) {
      if (this.control instanceof AbstractControl) {
        this.inp_val = this.control.value;
        this.control?.valueChanges?.subscribe((result: any) => {
          this.inp_val = result;
        });
      } else {
        this.inp_val = this.control;
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
