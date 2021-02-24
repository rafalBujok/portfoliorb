import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projekty-display',
  templateUrl: './projekty-display.component.html',
  styleUrls: ['./projekty-display.component.css']
})
export class ProjektyDisplayComponent implements OnInit {

  constructor() { }
  @Input() project: any;
  ngOnInit(): void {
  }
  openPage(link: string) {
    window.open(link);
  }
}
