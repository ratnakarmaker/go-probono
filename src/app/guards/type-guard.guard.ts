import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TypeGuardGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let auth_types: string = route?.data?.['guard_data']?.['auth_types'];
    let found: any = auth_types.includes(this.storage.getUser()?.['type']);
    if (found) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
