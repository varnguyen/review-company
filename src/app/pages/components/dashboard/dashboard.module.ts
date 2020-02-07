import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import {
    NbCardModule,
    NbListModule,
    NbTabsetModule,
    NbUserModule,
    NbIconModule,
    NbActionsModule,
    NbSpinnerModule,
    NbBadgeModule,
    NbSelectModule,
    NbInputModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { CompanyPlaceholderComponent } from './company-placeholder/company-placeholder.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NbCardModule,
        NbListModule,
        NbTabsetModule,
        NbUserModule,
        NbIconModule,
        NbActionsModule,
        NbSpinnerModule,
        NbBadgeModule,
        NbSelectModule,
        NbInputModule,
    ],
    declarations: [
        DashboardComponent,
        CompanyPlaceholderComponent
    ],
})
export class DashboardModule { }
