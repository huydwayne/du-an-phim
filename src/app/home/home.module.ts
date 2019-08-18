import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ItemPhimComponent } from './danh-sach-phim/item-phim/item-phim.component';
import { ShareModule } from 'src/_core/services/shared/share.module';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, DanhSachPhimComponent, ItemPhimComponent, DangNhapComponent, DangKyComponent],
  imports: [CommonModule, HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
