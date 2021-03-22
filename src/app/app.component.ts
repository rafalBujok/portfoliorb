import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');
    translate.use('en');
  }
  title = 'portfolio-rb';
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
