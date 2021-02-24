import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { TechnologyDisplayComponent } from './slide2/technology-display/technology-display.component';
import { ProjektyDisplayComponent } from './slide3/projekty-display/projekty-display.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';



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
    TechnologyDisplayComponent,
    ProjektyDisplayComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTabsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
