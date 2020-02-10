import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CompanyDetailComponent } from './company-detail.component';
import { NbCardModule, NbIconModule, NbTooltipModule, NbButtonModule } from '@nebular/theme';

@NgModule({
    imports: [
        FormsModule,
        NbCardModule,
        NbIconModule,
        NbTooltipModule,
        NbButtonModule
    ],
    declarations: [
        CompanyDetailComponent
    ],
})
export class CompanyDetailModule { }
