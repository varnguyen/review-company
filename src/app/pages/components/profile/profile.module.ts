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
    NbTooltipModule
} from '@nebular/theme';

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
        NbTooltipModule
    ],
    declarations: [
        ProfileComponent
    ],
})
export class ProfileModule { }
