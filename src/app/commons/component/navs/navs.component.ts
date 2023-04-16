import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss'],
})
export class NavsComponent implements OnChanges {
  @Input() items: any[] = [];

  @Input() key: number | null = null;
  @Output() keyChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() reset: Subject<any> = new Subject<any>();
  @Output() search: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
