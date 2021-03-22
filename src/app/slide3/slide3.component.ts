import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.css']
})

export class Slide3Component {
  project4 = {
    'liveUrl': 'https://unsplashtest.web.app/',
    'gitUrl': 'https://github.com/rafalBujok/UnsplashApp',
    'imageUrl': 'assets/dogShop.png',
    'technology':'Angular, JavaScript, TypeScript, RxJs, SASS, Bootstrap, Material Design'
  }
  project3 = {
    'liveUrl': 'https://rafalbujok.me',
    'gitUrl': 'https://github.com/rafalBujok/portfoliorb',
    'imageUrl': 'assets/portfolio.png',
    'technology':'Angular, JavaScript, TypeScript, Bootstrap, Material Design, Ngx Translate, Canvas'
  }
  project2 = {
    'liveUrl': 'https://dogshop-7ef9d.web.app/',
    'gitUrl': 'https://github.com/rafalBujok/dogShop',
    'imageUrl': 'assets/dogShop.png',
    'technology':'Angular, JavaScript, TypeScript, RxJs, SASS, Firebase, Bootstrap, Material Design'
  }
  project1 = {
    'liveUrl': 'https://mojagraaa.web.app/bohater',
    'gitUrl': 'https://github.com/rafalBujok/warhammer',
    'imageUrl': 'assets/warhammer.jpg',
    'technology':'Angular, JavaScript, TypeScript, CSS3, Firebase, Bootstrap, Material Design'
  }
  project0 = {
    'liveUrl': 'https://radogostbandpl.firebaseapp.com/',
    'gitUrl': 'https://github.com/rafalBujok/radogost',
    'imageUrl': 'assets/radogostpage.png',
    'technology':'Angular, JavaScript, TypeScript, CSS3, Firebase, Bootstrap'
  }

  openPage(link: string) {
    window.open(link);
  }
}
