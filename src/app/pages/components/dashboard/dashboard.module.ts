import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CompanyPlaceholderComponent } from './company-placeholder/company-placeholder.component';
import { PipesModule } from 'src/app/_pipes/pipes.module';

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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        // Nebular Module
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
