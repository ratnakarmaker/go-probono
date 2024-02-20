import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { PasswordComponent } from './password/password.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    InputComponent,
    SelectComponent,
    PasswordComponent,
    MultiSelectComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: [
    SearchBoxComponent,
    InputComponent,
    SelectComponent,
    PasswordComponent,
    MultiSelectComponent
  ],
})
export class FormFieldsModule {}
