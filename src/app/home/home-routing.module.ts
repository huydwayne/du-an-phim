import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: "", component: TrangChuComponent },
      { path: "danh-sach-phim", component: DanhSachPhimComponent },
      { path: "userlogin", component: DangNhapComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }