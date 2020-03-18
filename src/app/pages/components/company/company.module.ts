import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyAddComponent } from '././company-add/company-add.component';
import { CompanyDetailComponent } from '././company-detail/company-detail.component';
import { CompanyReviewDialogComponent } from './company-review-dialog/company-review-dialog.component';

import {
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbChatModule,
    NbIconModule,
    NbTooltipModule,
    NbButtonModule,
    NbSelectModule,
    NbAlertModule,
    NbInputModule
} from '@nebular/theme';

@NgModule({
    imports: [
        CompanyRoutingModule,
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,

        // Nebular Module
        NbCardModule,
        NbListModule,
        NbUserModule,
        NbChatModule,
        NbIconModule,
        NbTooltipModule,
        NbButtonModule,
        NbSelectModule,
        NbAlertModule,
        NbUserModule,
        NbInputModule
    ],
    declarations: [
        CompanyComponent,
        CompanyAddComponent,
        CompanyDetailComponent,
        CompanyReviewDialogComponent,
    ],
})
export class CompanyModule { }
