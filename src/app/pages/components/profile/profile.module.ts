import { NbCardModule, NbButtonModule, NbInputModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        FormsModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        NbDatepickerModule
    ],
    declarations: [
        ProfileComponent
    ],
})
export class ProfileModule { }
