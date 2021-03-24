import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentSection = 'title';
  currentLanguage = 'en';
  smallDevice = false;
  smallMenu = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 830) {
      this.smallDevice = true;
    }
    else { this.smallDevice = false; this.smallMenu = false; }
  }


  @Output() language = new EventEmitter<string>();

  private scrollSub: Subscription;
  constructor(private srv: ScrollService) { }

  ngOnInit() {
    this.scrollSub = this.srv.sesionObs$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'call_child') {
        this.currentSection = res.value;
      }
    });
    if (window.innerWidth < 830) {
      this.smallDevice = true;
    };

  }
  changeLanguage(language: string): void {
    this.language.emit(language);
    this.currentLanguage = language;
  }
  toggleSmallMenu() {
    this.smallMenu = !this.smallMenu;
  }
  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({ behavior: "smooth" });
    if (this.smallDevice === true) {
       this.smallMenu = false;


    }
  }
  ngOnDestroy() {
    if (this.scrollSub) { this.scrollSub.unsubscribe(); }

  }
}
