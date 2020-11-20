import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollserviceService } from '../scrollservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentSection = 'title';

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({ behavior: "smooth" });
  }

  private subscription: Subscription;
  constructor(private srv: ScrollserviceService) { }

  ngOnInit() {
    this.subscription = this.srv.sesionObs$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'call_child') {
        this.currentSection = res.value;

      }
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
