import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyAddComponent } from '././company-add/company-add.component';
import { CompanyDetailComponent } from '././company-detail/company-detail.component';
import { CompanyReviewDialogComponent } from './company-review-dialog/company-review-dialog.component';
import { CompanyDetailPlaceholderComponent } from './company-detail/company-detail-placeholder/company-detail-placeholder.component';

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
    NbInputModule,
    NbDialogModule,
    NbSpinnerModule,
} from '@nebular/theme';
import { PipesModule } from 'src/app/_pipes/pipes.module';

@NgModule({
    imports: [
        CompanyRoutingModule,
        FormsModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        PipesModule,

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
        NbInputModule,
        NbSpinnerModule,
        NbDialogModule.forChild(),
    ],
    declarations: [
        CompanyComponent,
        CompanyAddComponent,
        CompanyDetailComponent,
        CompanyReviewDialogComponent,
        CompanyDetailPlaceholderComponent
    ],
    entryComponents: [
        CompanyReviewDialogComponent,
    ],
})
export class CompanyModule { }
