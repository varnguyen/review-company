import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CompanyDetailComponent } from './company-detail.component';
import {
    NbCardModule,
    NbIconModule,
    NbTooltipModule,
    NbButtonModule,
    NbSelectModule,
    NbAlertModule,
    NbUserModule,
    NbInputModule,

} from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NbCardModule,
        NbIconModule,
        NbTooltipModule,
        NbButtonModule,
        NbSelectModule,
        NbAlertModule,
        NbUserModule,
        NbInputModule
    ],
    declarations: [
        CompanyDetailComponent,
    ],
})
export class CompanyDetailModule { }
