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
export class AuthGuardGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let props: boolean = route?.data?.['guard_data']?.['have_token'];
    if (props) {
      if (this.storage.getToken()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      if (this.storage.getToken()) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }
  }
}
