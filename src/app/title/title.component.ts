import { Component, OnInit } from '@angular/core';

import { start } from '../title/matrix.js'
import { start2 } from '../title/matrixname.js'
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  ngOnInit(): void {
    start();
    start2();
  }
  constructor() { }



  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({ behavior: "smooth" });
  }
}
