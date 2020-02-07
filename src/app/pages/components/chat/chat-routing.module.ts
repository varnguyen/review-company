import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
// import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { ChatListComponent, ChatDetailComponent, ConverstationComponent } from '.';

const routes: Routes = [{
    path: '',
    component: ChatComponent,
    children: [
        { path: '', redirectTo: 'converstation', pathMatch: 'full' },
        { path: 'converstation', component: ConverstationComponent },
        { path: 'chat-list', component: ChatListComponent },
        { path: 'chat/:user_id', component: ChatDetailComponent },
        // {
        //     path: 'tabs',
        //     component: TabsComponent,
        //     children: [
        //         { path: '', redirectTo: 'tab1', pathMatch: 'full' },
        //         { path: 'tab1', component: Tab1Component },
        //         { path: 'tab2', component: Tab2Component },
        //     ],
        // },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatRoutingModule {
}
