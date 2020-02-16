import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule } from '@nebular/theme';
import { ChangePasswordComponent } from './change-password.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,

        // Nebular Module
        NbCardModule,
        NbInputModule,
        NbCheckboxModule,
        NbButtonModule
    ],
    declarations: [
        ChangePasswordComponent
    ],
})
export class ChangePasswordModule { }
