import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly platform_server: boolean = false;

  private setInLocalStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
  private getFromLocalStorage(key: string): string {
    return window.localStorage.getItem(key) ?? '';
  }
  private removeFromLocalStorage(key: string): void {
    window.localStorage.removeItem(key);
  }
  private setInSessionStorage(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }
  private getFromSessionStorage(key: string): string {
    return window.sessionStorage.getItem(key) ?? '';
  }
  private removeFromSessionStorage(key: string): void {
    window.sessionStorage.removeItem(key);
  }

  constructor(@Inject(PLATFORM_ID) private platform_id: string) {
    this.platform_server = isPlatformServer(platform_id);
  }

  clearStorage() {
    window.localStorage.clear();
  }

  clearToken() {
    window.localStorage.removeItem('ucepToken');
  }

  clearUser() {
    window.localStorage.removeItem('ucepUser');
  }

  setToken(token: string) {
    if (this.platform_server) {
      this.clearToken();
    } else {
      window.localStorage.setItem('ucepToken', token);
    }
  }

  setUser(user: any) {
    if (this.platform_server) {
      this.clearUser();
    } else {
      window.localStorage?.setItem('ucepUser', JSON.stringify(user));
    }
  }

  getToken(): string | null {
    if (this.platform_server) {
      return null;
    } else {
      return window.localStorage?.getItem('ucepToken');
    }
  }

  getUser(): { [key: string]: any } | null {
    if (this.platform_server) {
      return null;
    } else {
      return JSON.parse(window?.localStorage?.getItem('ucepUser') ?? '{}');
    }
  }

  copyFromSessionToLocal() {}
  copyFromLocalToSession() {}
}
