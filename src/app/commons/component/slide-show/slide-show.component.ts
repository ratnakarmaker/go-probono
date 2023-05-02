import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: any[] = [];
  @Input() options: any;
  @Input() c_id: string = '';

  @Output() slide_clicked: EventEmitter<any> = new EventEmitter<any>();

  protected slideList: any[] = [];
  private currentIndex: number = 0;
  private interval: any = {};

  constructor(protected api: ApiService) {}

  ngOnDestroy(): void {
    window.clearInterval(this.interval[this.c_id]);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['data']?.currentValue?.length) {
      this.slideList = JSON.parse(JSON.stringify(this.data));
      if (this.data?.length > this.options?.show_count) {
        this.startAnimation();
      }
    }
  }

  startAnimation() {
    if (this.data?.length > this.options?.show_count) {
      this.interval[this.c_id] = window.setInterval(() => {
        this.animator();
      }, this.options?.duration ?? 2000);
    }
  }

  animator() {
    if (this.slideList.length >= this.data.length * 2) {
      this.slideList = JSON.parse(JSON.stringify(this.data));
      this.currentIndex = 0;
    }
    let element: any =
      window.document.getElementsByClassName('custom-slide')[0];
    let style: any = window.getComputedStyle(element);
    element.style.marginLeft = `${
      Number(style?.['margin-left']?.slice(0, -2)) -
      Number(style?.['width']?.slice(0, -2))
    }px`;
    this.slideList.push(this.slideList[this.currentIndex]);
    this.currentIndex += 1;
  }

  consoler(data: any) {
    if (data === 'enter') {
      this.ngOnDestroy();
    } else if (data === 'out') {
      this.startAnimation();
    }
  }
}
