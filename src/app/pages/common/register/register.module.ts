import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbCheckboxModule, NbIconModule, NbInputModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
// import { AuthGuard } from 'src/app/_helpers/auth.guard';

@NgModule({
    imports: [
        RegisterRoutingModule,
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
        NbSelectModule
    ],
    declarations: [RegisterComponent],
    providers: [
        // AuthGuard
    ]
})
export class RegisterModule { }
