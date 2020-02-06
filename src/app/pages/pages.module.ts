import { NgModule } from '@angular/core';
import {
    NbMenuModule,
    NbSidebarModule,
    NbLayoutModule,
    NbSidebarService,
    NbSelectModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule
} from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NotFoundModule } from './common/not-found/not-found.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { ECommerceModule } from './components/e-commerce/e-commerce.module';
import { ProductModule } from './components/product/product.module';
import { CustomerModule } from './components/customer/customer.module';

const NB_MODULE = [
    NbMenuModule,
    NotFoundModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbSelectModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule,
        DashboardModule,
        ECommerceModule,
        ProductModule,
        CustomerModule,

        NB_MODULE
    ],
    declarations: [
        PagesComponent,
    ],
    providers: [NbSidebarService]
})
export class PagesModule { }
