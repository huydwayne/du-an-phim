import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  chiTietPhim = new BehaviorSubject({} as Object);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  constructor() { }
  sharingDataChiTietPhim(phim) {
    this.chiTietPhim.next(phim);
  }
}
