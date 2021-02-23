import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.css']
})
export class Slide3Component implements OnInit {

  project = [
    ['DogShop', 'Projekt sklepu internetowego z zarządzaniem', 'https://dogshop-7ef9d.web.app/', 'https://github.com/Grolmorth/dogShop', 'assets/dogShop.png'],

    ['Generator postaci do Warhammera', 'Strona ze sporą biblioteką dotyczącą gry fabularnej Warhammer, za pomocą strony można tworzyć karty postaci, rozwijać je i zapisywać w bazie danych Firebase', 'https://mojagraaa.web.app/bohater', 'https://github.com/Grolmorth/warhammer-char-gen-2-ed', 'assets/warhammer.jpg'],
    ['Radogost', 'Strona zespołu Radogost, połączona z bazą danych firebase, możliwośc dodawania koncertów po zalogowaniu.', 'https://radogostbandpl.firebaseapp.com/home', 'https://github.com/Grolmorth/radogost', 'assets/radogostpage.png'],

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
