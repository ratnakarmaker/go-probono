import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./entrance/entrance.module').then((m) => m.EntranceModule),
    title: '',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [AuthGuardGuard],
    data: {
      guard_data: {
        have_token: false,
      },
    },
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Registration',
    canActivate: [AuthGuardGuard],
    data: {
      guard_data: {
        have_token: false,
      },
    },
  },
];

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let title: string | undefined = this.concatTitle(snapshot.root, '', ' | ');
    if (title) {
      this.title.setTitle(`${title} | Go Probono`);
    }
  }

  private concatTitle(
    route: ActivatedRouteSnapshot,
    title: string,
    separator: string
  ): string {
    if (!route) return title;

    let sub = route.data ? this.getResolvedTitleForRoute(route) : undefined;
    if (sub) {
      title = `${sub}${title ? separator : ''}${title}`;
    }

    title = this.concatTitle(route.children[0], title, separator);

    return title;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
})
export class AppRoutingModule {}
