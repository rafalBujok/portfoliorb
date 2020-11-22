import { Component, OnInit } from '@angular/core';

import { start } from '../title/matrix.js'
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  ngOnInit(): void {
    start();
  }
  constructor() { }



  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView({ behavior: "smooth" });
  }
}
