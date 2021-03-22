import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentSection = 'title';
  currentLanguage = 'en';

  @Output() language = new EventEmitter<string>();


  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({ behavior: "smooth" });
  }

  private scrollSub: Subscription;
  constructor(private srv: ScrollService) { }

  ngOnInit() {
    this.scrollSub = this.srv.sesionObs$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'call_child') {
        this.currentSection = res.value;
      }
    });

  }
  changeLanguage(language: string): void {
    this.language.emit(language);
    this.currentLanguage = language;
  }

  ngOnDestroy() {
    if (this.scrollSub) { this.scrollSub.unsubscribe(); }

  }
}
