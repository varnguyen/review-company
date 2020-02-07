import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent, ProfileComponent, CompanyDetailComponent, ChangePasswordComponent } from './components';
import { NotFoundComponent } from './common';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'company/:company_id', component: CompanyDetailComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'change-password', component: ChangePasswordComponent },
        {
            path: 'chat',
            loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule)
        },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: '**', component: NotFoundComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
