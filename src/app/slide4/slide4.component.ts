import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide4',
  templateUrl: './slide4.component.html',
  styleUrls: ['./slide4.component.css']
})
export class Slide4Component implements OnInit {

  constructor() { }
  today = new Date;
  year: number;
  ngOnInit(): void {
    this.year = this.today.getFullYear()
  }

}
