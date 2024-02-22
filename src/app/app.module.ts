import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './authentication/registration/user/user.component';
import { LawyerComponent } from './authentication/registration/lawyer/lawyer.component';
import { LawfirmComponent } from './authentication/registration/lawfirm/lawfirm.component';
import { ComponentModule } from './commons/component/component.module';
import { FormFieldsModule } from './commons/form-fields/form-fields.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    LawyerComponent,
    LawfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentModule,
    FormFieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIconPacks(
      fas,
      far
      // fab
    );
  }
}
