import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, DanhSachPhimComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
