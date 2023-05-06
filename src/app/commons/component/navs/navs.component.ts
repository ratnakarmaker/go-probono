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

  @Input() key: any = null;
  @Output() keyChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() reset: Subject<any> = new Subject<any>();
  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  navSelected(nav: any) {
    if (this.key !== null) {
      this.key = nav?.id;
      this.keyChange.emit(nav?.id);
    }
    this.search.emit(nav);
  }
}
