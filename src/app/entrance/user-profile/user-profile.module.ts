import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserProfileModule { }
