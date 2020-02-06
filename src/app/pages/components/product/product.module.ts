import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

@NgModule({
    imports: [
        FormsModule,
        Ng2SmartTableModule,
        NbCardModule
    ],
    declarations: [
        ProductComponent
    ],
})
export class ProductModule { }
