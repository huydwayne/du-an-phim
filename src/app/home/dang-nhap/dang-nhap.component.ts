import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { TrangChuComponent } from '../trang-chu/trang-chu.component';

const routes: Routes = [
  { path: '', component: TrangChuComponent }
]
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DangNhapComponent implements OnInit {

  loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

  checkLoginStatus = () => {
    // console.log(this.loginStatus);
    if (this.loginStatus === true) {
      this.router.navigate(['']);
    }
  }
  user = {
    taikhoan: "",
    matKhau: ""
  }

  taiKhoanStatus = true;
  matKhauStatus = true;
  taiKhoanErrorMessage = "";
  matKhauErrorMessage = "";

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.checkActive();
    this.checkLoginStatus();
  }

  checkActive = () => {
    let dangKyBox = document.getElementById('dang-ky').classList.contains("active");
    let dangNhapBox = document.getElementById('dang-nhap').classList.contains("active");
    if (!dangKyBox && !dangNhapBox) {
      document.getElementById('dang-nhap').classList.add("active");
      this.showLogin();
    }
  }

  ngOnDestroy() {
    document.getElementById('dang-ky').classList.remove("active");
    document.getElementById('dang-nhap').classList.remove("active");
  }




  showSignup = () => {
    let prism = document.getElementById("box");
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
  }
  showLogin = () => {
    let prism = document.getElementById("box")

    prism.style.transform = "translateZ(-100px)";
  }
  showError = () => {
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


  nhapTaiKhoan = (taiKhoan) => {
    this.user.taikhoan = taiKhoan;
  }

  nhapMatKhau = (matKhau) => {
    this.user.matKhau = matKhau;
  }

  lengthValidateTaiKhoan = (taiKhoan) => {
    if (taiKhoan.length === 0) {
      this.taiKhoanErrorMessage = "Tài Khoản không được bỏ trống !";
      this.taiKhoanStatus = false;
    }
    else this.taiKhoanStatus = true;
  }

  lengthValidateMatKhau = (matKhau) => {
    this.matKhauStatus = false;
    if (matKhau.length === 0) {
      this.matKhauErrorMessage = "Mật khẩu không được bỏ trống !";
    } else if (matKhau.length < 6) {
      this.matKhauErrorMessage = "Mật khẩu phải từ 6 kí tự !";
    }
    else this.matKhauStatus = true;
  }

  dangNhap = () => {
    this.lengthValidateTaiKhoan(this.user.taikhoan);
    this.lengthValidateMatKhau(this.user.matKhau);

    if (this.taiKhoanStatus && this.matKhauStatus) {
      let taiKhoanInput = <HTMLInputElement>document.getElementById('taiKhoan');
      let matKhauInput = <HTMLInputElement>document.getElementById('matKhau');
      const uri = `QuanLyNguoiDung/DangNhap`;
      this.dataService.post(uri, this.user).subscribe((data: any) => {
        console.log(data);
        this.showThankYou();
        localStorage.setItem('userLogin', JSON.stringify(data));
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem("loginStatus", JSON.stringify(true));
        setTimeout(() => location.replace(""), 2200)

      }, error => {
        // console.log(error.error);

        this.showError();
        taiKhoanInput.value = "";
        matKhauInput.value = "";
        this.user.taikhoan = "";
        this.user.matKhau = "";
        setTimeout(() => this.showLogin(), 2000)
      })
    }



  }

}
