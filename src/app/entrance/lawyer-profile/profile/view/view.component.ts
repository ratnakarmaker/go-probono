import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  @Input() profile: any;

  @Output() c_change: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected api: ApiService) {}
}
