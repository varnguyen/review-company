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
    NbContextMenuModule,
    NbListModule,
    NbCardModule,
    NbPopoverModule
} from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NotFoundModule } from './common/not-found/not-found.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { CompanyDetailModule } from './components/company-detail/company-detail.module';
import { ProfileModule } from './components/profile/profile.module';
import { ChatModule } from './components/chat/chat.module';
import { ChangePasswordModule } from './components/change-password/change-password.modue';

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
    NbCardModule,
    NbListModule,
    NbPopoverModule
];

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule,
        DashboardModule,
        CompanyDetailModule,
        ProfileModule,
        ChatModule,
        ChangePasswordModule,

        // Nebular Module
        NB_MODULE
    ],
    declarations: [
        PagesComponent
    ],
    providers: [NbSidebarService]
})
export class PagesModule { }
