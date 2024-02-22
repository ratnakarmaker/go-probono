import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent {
  @Input() control: AbstractControl<any, any> | any = null;
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() dataList: any[] = [];
  @Input() value_control: string = '';
  @Input() view_control: string = '';

  @ViewChild('autocomplete_input') input_field: ElementRef | null = null;
  @ViewChild('autocomplete_options') select_options: ElementRef | null = null;

  @HostListener('document:click', ['$event'])
  onGlobalClick(event: any): void {
    if (
      this.input_field?.nativeElement?.contains(event?.target) ||
      this.select_options?.nativeElement?.contains(event?.target)
    ) {
      this.option_class = 'show-option';
    } else {
      this.option_class = 'hide-option';
    }
  }

  @Output() controlChange: EventEmitter<any> = new EventEmitter<any>();

  protected search_text: string = '';
  protected input_values: Map<string, any> = new Map();
  protected option_class: 'show-option' | 'hide-option' = 'hide-option';
  protected selected_list: any[] = [];

  optionShower(opt: any) {
    return (
      !this.search_text ||
      opt?.[this.view_control]
        ?.toLowerCase()
        ?.includes(this.search_text.toLowerCase())
    );
  }

  setValue(option: any) {
    if (this.input_values.has(`${option?.[this.value_control]}`)) {
      this.input_values.delete(`${option?.[this.value_control]}`);
    } else {
      this.input_values.set(`${option?.[this.value_control]}`, option);
    }
    this.selected_list = Array.from(this.input_values.values());
    if(this.control instanceof AbstractControl){
      this.control.setValue(Array.from(this.input_values.keys()));
    }else{
      this.controlChange.emit(Array.from(this.input_values.keys()));
    }
  }

  clearAll(){
    this.input_values.clear();
    this.selected_list = [];
    if(this.control instanceof AbstractControl){
      this.control.setValue([]);
    }else{
      this.controlChange.emit([]);
    }
  }
}
