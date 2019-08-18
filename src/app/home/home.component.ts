import { Component, OnInit } from '@angular/core';
import { windowCount } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.hideNavbarOnScroll();
  }

  hideNavbarOnScroll = () => {
    let navbar = document.getElementById("myNavbar");
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        navbar.classList.add("hide");
      } else {
        navbar.classList.remove("hide");
      }
    }
  }
}
