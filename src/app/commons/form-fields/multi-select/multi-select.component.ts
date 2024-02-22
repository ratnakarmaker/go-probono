import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
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
    if (this.input_field?.nativeElement?.contains(event?.target) || this.select_options?.nativeElement?.contains(event?.target)){
      this.option_class = 'show-option';
    }else{
      this.option_class = 'hide-option';
    }
  }

  @Output() controlChange: EventEmitter<any> = new EventEmitter<any>();

  protected search_text: string = '';
  protected input_values: {[key: string]: any} = {};
  protected option_class: 'show-option' | 'hide-option' = 'hide-option';

  selectedList(){
    return Object.values(this.input_values);
  }

  optionShower(opt: any){
    return !this.search_text || opt?.[this.view_control]?.toLowerCase()?.includes(this.search_text.toLowerCase());
  }

  setValue(option: any){
    if(option?.[this.value_control] in this.input_values){
      delete this.input_values?.[option?.[this.value_control]];
    }else{
      this.input_values = {
        ...this.input_values,
        [option?.[this.value_control]]: option
      }
    }
  }
}
