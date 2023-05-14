import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { environment } from 'src/environments/environment';
import { api_collection } from 'src/app/enums/api-url-collection';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl: string = '';
  private readonly apiUrl: string = '';
  private readonly apiList: any = {};

  private getHeader(): { headers: HttpHeaders } {
    let token: string | null = this.storage.getToken();
    return {
      headers: new HttpHeaders({
        // 'Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Origin': '*',
      })?.set('token', token ? `${token}` : ''),
    };
  }

  private getLeanParams(params?: any): any {
    return params
      ? {
          ...Object.entries(params).reduce((pV: any, [key, val]) => {
            return val
              ? {
                  [key]: val,
                  ...pV,
                }
              : { ...pV };
          }, {}),
        }
      : undefined;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService
  ) {
    this.baseUrl = `${environment.base_url}`;
    this.apiUrl = `${environment.base_url}/api`;
    this.apiList = api_collection;
  }

  private _get(route: string, params?: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${route}`, {
      ...this.getHeader(),
      params,
    });
  }

  private _post(route: string, data: any, params?: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${route}`, data, {
      ...this.getHeader(),
      params,
    });
  }

  private _update(route: string, data: any, params?: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${route}`, data, {
      ...this.getHeader(),
      params,
    });
  }

  private _delete(route: string, params?: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${route}`, {
      ...this.getHeader(),
      params,
    });
  }

  public all(
    listKey: string,
    parameters?: any,
    selfShowMessage?: boolean
  ): Observable<any> {
    let route: string = this.apiList[listKey];
    let params: any = { ...this.getLeanParams(parameters), page: 1, size: -1 };
    return new Observable((subscriber: Subscriber<any>) => {
      let tempSubs: Subscription = this._get(route, params).subscribe({
        next: (response: any) => {
          subscriber.next(response);
        },
        error: (error: any) => {
          subscriber.error(error);
        },
        complete: () => {
          subscriber.complete();
          tempSubs.unsubscribe();
        },
      });
    });
  }

  public list(
    listKey: string,
    parameters: any = {},
    routeAddons?: string | number,
    selfShowMessage?: boolean
  ) {
    let route: string = `${this.apiList[listKey]}${routeAddons ?? ''}`;
    let params: any = { ...this.getLeanParams(parameters) };
    return new Observable((subscriber: Subscriber<any>) => {
      let tempSubs: Subscription = this._get(route, params).subscribe({
        next: (response: any) => {
          // // this.toastr.showSuccess(response);
          subscriber.next(response);
        },
        error: (error: any) => {
          // // this.toastr.showDanger(error?.error);
          subscriber.error(error);
        },
        complete: () => {
          subscriber.complete();
          tempSubs.unsubscribe();
        },
      });
    });
  }

  public single(
    listKey: string,
    dataId?: string | number,
    parameters?: any,
    selfShowMessage?: boolean
  ): Observable<any> {
    let route: string = this.apiList[listKey];
    let params: any = { ...this.getLeanParams(parameters) };
    return new Observable((subscriber: Subscriber<any>) => {
      let tempSubs: Subscription = this._get(
        `${route}${dataId ? '/' + dataId : ''}`,
        params
      ).subscribe({
        next: (response: any) => {
          subscriber.next(this.detailsDataPatcher(response));
        },
        error: (error: any) => {
          subscriber.error(error);
          // this.toastr.showDanger(error?.error);
        },
        complete: () => {
          subscriber.complete();
          tempSubs.unsubscribe();
        },
      });
    });
  }

  detailsDataPatcher(data: any): any {
    return Object.entries(data)?.reduce(
      (pV: any, [key, value]: [key: string, value: any]) => {
        return {
          ...pV,
          [key]:
            value === null
              ? ''
              : typeof value === 'object' && !Array.isArray(value)
              ? this.detailsDataPatcher(value)
              : typeof value === 'object' && Array.isArray(value)
              ? value.map((tada: any) => this.detailsDataPatcher(tada))
              : value,
        };
      },
      {}
    );
  }

  public post(
    listKey: string,
    data: any = {},
    parameters?: any,
    routeAddons?: string | number,
    selfShowMessage?: boolean
  ): Observable<any> {
    let route: string = `${this.apiList[listKey]}${routeAddons ?? ''}`;
    let params: any = { ...this.getLeanParams(parameters) };
    return new Observable((subscriber: Subscriber<any>) => {
      let tempSubs: Subscription = this._post(
        `${route}`,
        data,
        params
      ).subscribe({
        next: (response: any) => {
          if (response?.code === 201 && !selfShowMessage) {
            // this.toastr.showSuccess(response);
          }
          subscriber.next(response);
        },
        error: (error: any) => {
          if (!selfShowMessage) {
            // this.toastr.showDanger(error?.error);
          }
          subscriber.error(error);
        },
        complete: () => {
          subscriber.complete();
          tempSubs.unsubscribe();
        },
      });
    });
  }

  public update(
    listKey: string,
    dataId: number | string,
    data: any = {},
    parameters?: any,
    selfShowMessage?: boolean
  ): Observable<any> {
    let route: string = `${this.apiList[listKey]}/${dataId}`;
    let params: any = { ...this.getLeanParams(parameters) };
    return new Observable((subscriber: Subscriber<any>) => {
      let tempSubs: Subscription = this._update(
        `${route}`,
        data,
        params
      ).subscribe({
        next: (response: any) => {
          subscriber.next(response);
          if (response?.code === 200) {
            // this.toastr.showSuccess(response);
          }
        },
        error: (error: any) => {
          subscriber.error(error);
          // this.toastr.showDanger(error?.error);
        },
        complete: () => {
          subscriber.complete();
          tempSubs.unsubscribe();
        },
      });
    });
  }

  public delete(
    listKey: string,
    dataId: number | string,
    parameters?: any,
    selfShowMessage?: boolean
  ) {
    let route: string = `${this.apiList[listKey]}/${dataId}`;
    let params: any = { ...this.getLeanParams(parameters) };
    return new Observable((subscriber: Subscriber<any>) => {
      // let conf: NgbModalRef = this.modalService.open(ConfirmationComponent, {
      //   backdrop: true,
      //   size: 'sm',
      //   keyboard: true,
      //   scrollable: true,
      //   centered: true,
      //   ariaLabelledBy: 'modal-basic-title',
      // });
      // conf.componentInstance.data = {
      //   message: 'Do you want to proceed?',
      //   left_btn: {
      //     text: 'Yes',
      //     control: true,
      //     class: 'btn-success',
      //   },
      //   right_btn: {
      //     text: 'No',
      //     control: false,
      //     class: 'btn-danger',
      //   },
      // };
      // conf.componentInstance.action.subscribe((result: any) => {
      //   if (result) {
      let tempSubs: Subscription = this._delete(`${route}`, params).subscribe({
        next: (response: any) => {
          subscriber.next(response);
          if (response?.code === 200) {
            // this.toastr.showSuccess(response);
          }
        },
        error: (error: any) => {
          subscriber.error(error);
          // this.toastr.showDanger(error?.error);
        },
        complete: () => {
          subscriber.complete();
          tempSubs.unsubscribe();
          // conf.close();
        },
      });
      // } else {
      //   conf.close();
      //     }
      //   });
    });
  }

  public downloadBack(
    listKey: string,
    dataId?: number | string,
    parameters?: any,
    selfShowMessage?: boolean
  ) {
    let route: string = `${this.apiUrl}/${this.apiList[listKey]}${
      dataId ? '/' + dataId : ''
    }?${Object.entries(parameters).reduce((pV: string, cV: any) => {
      return pV + cV[0] + '=' + cV[1] + '&';
    }, '')}_token=${this.storage.getToken()}`;
    window.open(route);
  }

  public imagePath(url: string): string {
    return url
      ? `${this.baseUrl}${url?.startsWith('/') ? url : '/' + url}`
      : 'assets/icon/plus-chara.jpg';
  }
}
