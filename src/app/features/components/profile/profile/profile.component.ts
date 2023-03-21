import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  // verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  metaTitle: string = 'Profile';

  constructor(
    // private authService: AuthenticationService,
    private title: Title,
  ) {}

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle(this.metaTitle);
  }
  onLogout() {
    // this.authService.logOut();
    // this.matSnackBar.open("You're logged out", 'X', {
    //   duration: 3000,
    //   horizontalPosition: this.horizontalPosition,
    //   verticalPosition: this.verticalPosition,
    //   panelClass: ['blue-snackbar'],
    // });
  }
  onActivate(event: any) {
    window.scroll(0, 0);
  }

}
