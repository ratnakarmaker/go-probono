import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  @Input() item: any;
  @Input() c_class: string = '';

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected api: ApiService) {}
}
