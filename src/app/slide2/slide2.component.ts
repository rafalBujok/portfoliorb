import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.css']
})
export class Slide2Component implements OnInit {

  constructor() { }
  technology = [
    ['HTML5', 'assets/html5-pngrepo-com.png'],
    ['CSS3', 'assets/css3-pngrepo-com.png'],
    ['Bootstrap', 'assets/bootstrap-pngrepo-com.png'],
    ['GIT', 'assets/git-pngrepo-com.png'],
    ['Angular', 'assets/angular-pngrepo-com.png'],
    ['JavaScript', 'assets/javascript-pngrepo-com.png'],
    ['TypeScript', 'assets/typescript-pngrepo-com.png'],
    ['RWD', 'assets/responsive-devices-pngrepo-com.png'],
    ['SASS', 'assets/sass-pngrepo-com.png'],
  ]

  ngOnInit(): void {

  }

}
