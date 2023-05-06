import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    InputComponent,
    SelectComponent,
    PasswordComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: [
    SearchBoxComponent,
    InputComponent,
    SelectComponent,
    PasswordComponent,
  ],
})
export class FormFieldsModule {}
