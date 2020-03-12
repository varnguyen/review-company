import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestPasswordComponent } from './request-password.component';
import { RequestPasswordRoutingModule } from './request-password-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbAlertModule
} from '@nebular/theme';

@NgModule({
    imports: [
        RequestPasswordRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,

        // Nebular Module
        NbCheckboxModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule,
        NbSelectModule,
        NbAlertModule
    ],
    declarations: [RequestPasswordComponent]
})
export class RequestPasswordModule { }
