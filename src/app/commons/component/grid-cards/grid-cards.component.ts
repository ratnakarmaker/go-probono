import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss'],
})
export class GridCardsComponent implements OnChanges {
  @Input() items: any[] = [];
  @Input() c_class: string = '';
  @Input() buttons: any[] = [];

  @Input() key: number | null = null;
  @Output() keyChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() reset: Subject<any> = new Subject<any>();

  @Output() state_change: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected api: ApiService) {}
  ngOnChanges(changes: SimpleChanges): void {}
}
