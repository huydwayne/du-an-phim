import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.activeTrangChuComponent();
  }

  ngOnDestroy() {
    document.getElementById('trang-chu').classList.remove("active");
  }
  activeTrangChuComponent = () => {
    document.getElementById('trang-chu').classList.add("active");
  }
}
