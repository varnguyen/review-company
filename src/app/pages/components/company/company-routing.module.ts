import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [{
    path: '',
    component: CompanyComponent,
    children: [
        { path: '', redirectTo: 'add', pathMatch: 'full' },
        { path: 'add', component: CompanyAddComponent },
        { path: ':company_id', component: CompanyDetailComponent },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CompanyRoutingModule {
}
