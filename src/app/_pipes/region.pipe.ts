import { Pipe, PipeTransform } from '@angular/core';
// import { CONSTANTS } from 'src/app/configs/app-constants.config';

@Pipe({
    name: 'region'
})

export class RegionPiPe implements PipeTransform {
    transform(regionId: number): string {
        if (regionId === undefined) {
            return '';
        }

        // const region = CONSTANTS.AREA_JAPAN.concat(CONSTANTS.AREA_UNITED_STATES).find(area => area.value === regionId);

        // return region ? region.text : CONSTANTS.NOT_SET_TEXT;
    }
}
