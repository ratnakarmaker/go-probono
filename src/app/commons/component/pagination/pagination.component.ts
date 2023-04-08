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

interface PageCollection {
  view: string;
  disabled: boolean;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges, OnDestroy {
  @Input() total: number = 0;
  @Input() page: number = 0;
  @Input() size: number = 0;
  @Input() pagination_class_names: string = '';

  @Input() pageOptions: {
    show: boolean;
    display?: 'all' | 'scroll' | 'drop';
    size?: 'al' | 'lg' | 'md' | 'sm';
  } = {
    show: true,
    display: 'all',
    size: 'lg',
  };
  @Input() sizeOptions: {
    show: boolean;
    display?: 'drop' | 'all' | 'scroll';
    size?: number;
  } = {
    show: true,
  };

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnDestroy(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes?.['pageOptions']?.currentValue ||
      changes?.['total']?.currentValue ||
      changes?.['size']?.currentValue ||
      changes?.['page']?.currentValue
    ) {
      if (this.pageOptions?.show) {
        let bgn_pos: number = 1;
        let mid_pos: number = this.page;
        let end_pos: number = Math.ceil(this.total / this.size);
        let fst_pos: number = Math.ceil((this.page + bgn_pos) / 2);
        let lst_pos: number = Math.floor((this.page + end_pos) / 2);
        this.i_page_collection = Array.from({
          length: end_pos,
        })?.reduce((pV: PageCollection[], cV: any, i: number) => {
          if (i === 0 || i === end_pos - 1) {
            return [
              ...pV,
              {
                view: `${i + 1}`,
                disabled: false,
              },
            ];
          } else if (this.pageOptions.size === 'al') {
            return [
              ...pV,
              {
                view: `${i + 1}`,
                disabled: false,
              },
            ];
          } else if (this.pageOptions?.size === 'lg') {
            if (
              (fst_pos - 2 <= i && fst_pos >= i) ||
              (mid_pos - 2 <= i && mid_pos >= i) ||
              (lst_pos - 2 <= i && lst_pos >= i)
            ) {
              return [
                ...pV,
                {
                  view: `${i + 1}`,
                  disabled: false,
                },
              ];
            } else if (pV[pV.length - 1]?.view !== '...') {
              return [
                ...pV,
                {
                  view: `...`,
                  disabled: true,
                },
              ];
            }
          }
          return pV;
        }, []);
      }
    }
  }
  ngOnInit(): void {}
  protected i_page_collection: PageCollection[] = [];

  jumpToPage(event: string) {
    let temp_out: string = '';
    if (!/\-1|\+1|\-|\+/.test(event)) {
      temp_out = event;
    } else if (/\-1|\+1/.test(event)) {
      temp_out = `${Number(this.page) + Number(event)}`;
    } else if (event === '+') {
      temp_out = `${Math.ceil(this.total / this.size)}`;
    } else if (event === '-') {
      temp_out = '1';
    }
    this.pageChange.emit(Number(temp_out));
  }
}
