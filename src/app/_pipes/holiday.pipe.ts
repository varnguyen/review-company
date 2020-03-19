import { Pipe, PipeTransform } from '@angular/core';
// import { CONSTANTS } from 'src/app/configs/app-constants.config';

@Pipe({
    name: 'holiday'
})

export class HolidayPiPe implements PipeTransform {
    transform(dayOff: number): string {
        if (dayOff === undefined) {
            return '';
        }

        // const holi = CONSTANTS.HOLIDAY.find(holiday => holiday.value === dayOff);

        // return holi ? holi.text : CONSTANTS.NOT_SET_TEXT;
    }
}
