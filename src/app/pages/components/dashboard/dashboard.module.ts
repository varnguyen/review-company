import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbListModule, NbTabsetModule, NbUserModule, NbIconModule, NbActionsModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NbCardModule,
        NbListModule,
        NbTabsetModule,
        NbUserModule,
        NbIconModule,
        NbActionsModule
    ],
    declarations: [
        DashboardComponent
    ],
})
export class DashboardModule { }
