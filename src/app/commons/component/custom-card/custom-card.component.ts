import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() item: any;
  @Input() buttons: any[] = [];
  @Input() c_class: string = '';

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected api: ApiService) {}
}
