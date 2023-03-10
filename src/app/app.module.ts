import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { CarouselSliderComponent } from './features/components/home/carousel-slider/carousel-slider.component';
import { HomeComponent } from './features/components/home/home.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { HelpSectionComponent } from './features/components/home/help-section/help-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderNavbarComponent,
    HeaderTopComponent,
    CarouselSliderComponent,
    HomeComponent,
    HelpSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
