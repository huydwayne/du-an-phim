import { Component, OnInit } from '@angular/core';
import { windowCount } from 'rxjs/operators';
import { Local } from 'protractor/built/driverProviders';
import { debug } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userStatusLogin = false;

  constructor() { }

  ngOnInit() {
    this.checkUser();
    // console.log(this.userInfo);
    this.hideNavbarOnScroll();
  }

  activeDangNhapComponent = () => {
    document.getElementById('dang-nhap').classList.add("active");
    document.getElementById('dang-ky').classList.remove("active");
    localStorage.setItem("dangNhapComponent", "inComponent");
    localStorage.removeItem("dangKyComponent");
    setTimeout(() => this.showLogin(), 0)
  }

  activeDangKyComponent = () => {
    document.getElementById('dang-ky').classList.add("active");
    document.getElementById('dang-nhap').classList.remove("active");
    localStorage.setItem("dangKyComponent", "inComponent");
    localStorage.removeItem("dangNhapComponent");
    setTimeout(() => this.showSignup(), 0)

  }
  userInfo = JSON.parse(localStorage.getItem("userLogin"));
  checkUser = () => {
    if (this.userInfo !== null) {
      this.userInfo.hoTen = this.titleCase(this.userInfo.hoTen);

      this.userStatusLogin = true;
    }
  }

  showSignup = () => {
    let prism = document.getElementById("box");
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
  }
  showLogin = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px)";
  }

  logOut = () => {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("accessToken");
    location.reload();
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
  titleCase = (str) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }
}
