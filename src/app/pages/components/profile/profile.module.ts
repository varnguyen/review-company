import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        NbDatepickerModule
    ],
    declarations: [
        ProfileComponent
    ],
})
export class ProfileModule { }
