import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  private danhSachPhim = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.activeDanhSachPhimComponent();
    this.getDanhSachPhim();
  }

  ngOnDestroy() {
    document.getElementById('danh-sach-phim').classList.remove("active");
  }

  activeDanhSachPhimComponent = () => {
    document.getElementById('danh-sach-phim').classList.add("active");
  }

  getDanhSachPhim = () => {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    this.dataService.get(uri).subscribe((data: []) => {
      this.danhSachPhim = data;
      console.log(this.danhSachPhim);
    })
  }
}
