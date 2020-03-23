import { Pipe, PipeTransform } from '@angular/core';
import { CONFIG } from '../_data';

@Pipe({
    name: 'staff'
})

export class StaffsPiPe implements PipeTransform {
    transform(memberTotal: number): string {
        if (memberTotal === undefined || memberTotal === null) {
            return 'Chưa có';
        }
        const staff = CONFIG.STAFFS.find(e => e.value == memberTotal);
        return staff ? staff.name : 'Dữ liệu lỗi';
    }
}
