import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
@NgModule({
    imports: [
        NotFoundRoutingModule,
        RouterModule,
        NbCardModule,
        NbButtonModule
    ],
    declarations: [NotFoundComponent]
})
export class NotFoundModule { }
