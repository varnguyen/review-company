import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent, ProductComponent, CustomerComponent } from './components';
import { NotFoundComponent } from './common';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'product', component: ProductComponent },
        { path: 'customer', component: CustomerComponent },
        // {
        //     path: 'layout',
        //     loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
        // }
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: '**', component: NotFoundComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
