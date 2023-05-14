import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  @Input() profile: any;

  @Output() c_change: EventEmitter<any> = new EventEmitter<any>();
}
