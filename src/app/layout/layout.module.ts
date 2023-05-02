import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentModule } from '../commons/component/component.module';
import { FormFieldsModule } from '../commons/form-fields/form-fields.module';

@NgModule({
  declarations: [
    HeaderTopComponent,
    HeaderBottomComponent,
    FooterTopComponent,
    FooterBottomComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, ComponentModule, FormFieldsModule],
  exports: [
    HeaderTopComponent,
    HeaderBottomComponent,
    FooterTopComponent,
    FooterBottomComponent,
  ],
})
export class LayoutModule {}
