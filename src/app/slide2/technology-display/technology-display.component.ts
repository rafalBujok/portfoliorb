import { AfterViewInit, Component, Input, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-technology-display',
  templateUrl: './technology-display.component.html',
  styleUrls: ['./technology-display.component.css']
})
export class TechnologyDisplayComponent implements OnInit  {

  @Input() tech: any;
  constructor() { }

  ngOnInit(): void {
  }

}
