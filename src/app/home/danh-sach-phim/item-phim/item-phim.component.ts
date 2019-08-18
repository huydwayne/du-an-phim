import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/_core/services/shared/share-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() objPhim;
  constructor(private shareDataService: ShareDataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.objPhim);
  }

  xemNhanh = () => {

    let linkVideo = this.objPhim.Trailer;
    let splitted = linkVideo.split("?v=", 2);
    let newObjPhim = { ...this.objPhim, Trailer: "https://www.youtube.com/embed/" + splitted[1] }


    this.shareDataService.sharingDataChiTietPhim(newObjPhim);
  }
}
