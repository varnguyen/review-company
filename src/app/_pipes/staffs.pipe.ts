import { Pipe, PipeTransform } from '@angular/core';
import { STAFFS } from '../_data';

@Pipe({
    name: 'staff'
})

export class StaffsPiPe implements PipeTransform {
    transform(jobId: number): string {
        if (jobId === undefined || jobId === null) {
            return 'Chưa có';
        }

        const staff = STAFFS.find(e => e.value === jobId);
        return staff ? staff.title : 'DATA ERROR';
    }
}
