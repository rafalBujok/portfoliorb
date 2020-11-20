import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParallaxComponent } from './parallax/parallax.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { TitleComponent } from './title/title.component';

import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { Slide4Component } from './slide4/slide4.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Slide1Component } from './slide1/slide1.component';



@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    NavbarComponent,
    ScrollSpyDirective,
    TitleComponent,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    Slide4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
