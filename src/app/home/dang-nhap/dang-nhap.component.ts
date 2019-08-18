import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.activeDangNhapComponent();
  }

  ngOnDestroy() {
    document.getElementById('dang-nhap').classList.remove("active");
  }
  activeDangNhapComponent = () => {
    document.getElementById('dang-nhap').classList.add("active");

  }


  showSignup = () => {
    let prism = document.getElementById("box");
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
  }
  showLogin = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px)";
  }
  showForgotPassword = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
  }

  showSubscribe = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
  }

  showContactUs = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
  }

  showThankYou = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
  }


}
