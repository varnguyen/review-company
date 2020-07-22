import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import {
    DashboardComponent,
    ProfileComponent,
    ChangePasswordComponent,
} from './components';
import { NotFoundComponent } from './common';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'profile', component: ProfileComponent, },
        { path: 'change-password', component: ChangePasswordComponent, },

        {
            path: 'company',
            loadChildren: () => import('./components/company/company.module').then(m => m.CompanyModule)
        },
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
