import { Component, OnInit } from '@angular/core';
import { ScrollserviceService } from '../scrollservice.service';
import AOS from 'aos';
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor(private srv: ScrollserviceService) {
  }
  ngOnInit(): void {
    AOS.init();

  }
  currenctSection: string;

  onSectionChange(sectionId: string) {
    this.currenctSection = sectionId;
    this.srv.notifyOther({ option: 'call_child', value: this.currenctSection })

  }
}

