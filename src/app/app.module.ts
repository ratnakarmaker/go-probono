import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderNavbarComponent,
    HeaderTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
