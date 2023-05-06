import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Input() key: string = '';
  @Output() keyChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() clear: Subject<any> = new Subject<any>();
  @Output() search: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor() {}
  ngOnInit(): void {
    this.clear.subscribe((resp: any) => (this.key = resp));
  }
}
