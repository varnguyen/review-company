import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StaffsPiPe } from './staffs.pipe';

import { RegionPiPe } from './region.pipe';
import { HolidayPiPe } from './holiday.pipe';

const PIPE_MODULES = [
    RegionPiPe,
    HolidayPiPe,
    StaffsPiPe,
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PIPE_MODULES
    ],
    exports: [
        PIPE_MODULES
    ]
})
export class PipesModule { }
