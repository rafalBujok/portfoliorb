import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParallaxComponent } from './parallax/parallax.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { TitleComponent } from './title/title.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
import { Slide4Component } from './slide4/slide4.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Slide1Component } from './slide1/slide1.component';
import { TechnologyDisplayComponent } from './slide2/technology-display/technology-display.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';




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


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTabsModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
