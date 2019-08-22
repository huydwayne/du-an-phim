import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/services/shared/share-data.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  chiTietPhim: any;
  constructor(private shareDataService: ShareDataService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.shareDataService.shareChiTietPhim.subscribe((data: any) => {
      console.log(data);

      this.chiTietPhim = data;
    })


  }

  closeTab = () => {
    setTimeout(() => {
      let element = document.getElementById('myModal');
      let displayStyle = element.style.display;
      if (displayStyle === "none") {
        this.chiTietPhim.trailer = "";
      }
    }, 100);


  }


}
