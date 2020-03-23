import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';

import {
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbTooltipModule,
    NbIconModule
} from '@nebular/theme';
// import { NbDateFnsDateModule } from '@nebular/date-fns';
// import { NbMomentDateModule } from '@nebular/moment';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        // Nebular Module
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        NbDatepickerModule,
        NbTooltipModule,
        NbIconModule,
        // NbDateFnsDateModule,
        // NbMomentDateModule
    ],
    declarations: [
        ProfileComponent
    ],
})
export class ProfileModule { }
