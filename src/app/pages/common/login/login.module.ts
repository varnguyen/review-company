import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbCheckboxModule, NbIconModule, NbInputModule, NbButtonModule } from '@nebular/theme';
// import { AuthGuard } from 'src/app/_helpers/auth.guard';

@NgModule({
    imports: [
        LoginRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        // Nebular
        NbCheckboxModule,
        NbIconModule,
        NbInputModule,
        NbButtonModule
    ],
    declarations: [LoginComponent],
    providers: [
        // AuthGuard
    ]
})
export class LoginModule { }
