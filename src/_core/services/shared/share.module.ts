import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';
// Share module dùng để muốn share component nào qua bất kì nơi khác => chỉ cần import module vào nơi muốn lấy th chứ k cần phải import cả component ( sẽ bị lỗi nnếu quá 2)
@NgModule({
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ShareModule { }
