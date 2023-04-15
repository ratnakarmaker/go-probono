import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss'],
})
export class NavsComponent implements OnChanges {
  @Input() items: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
