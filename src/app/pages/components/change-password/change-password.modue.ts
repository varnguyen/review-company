import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule } from '@nebular/theme';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
    imports: [
        FormsModule,
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
