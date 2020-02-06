import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

@NgModule({
    imports: [
        FormsModule,
        Ng2SmartTableModule,
        NbCardModule
    ],
    declarations: [
        CustomerComponent
    ],
})
export class CustomerModule { }
