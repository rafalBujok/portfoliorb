import { Component, OnInit } from '@angular/core';
import { info } from '../slide1/info.js';
@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.css']
})
export class Slide1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    info();
  }

}
