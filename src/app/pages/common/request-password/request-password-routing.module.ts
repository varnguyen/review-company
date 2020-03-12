import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestPasswordComponent } from './request-password.component';

const routes: Routes = [
    { path: '', component: RequestPasswordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequestPasswordRoutingModule {
}
