import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRoutingModule } from './chat-routing.module';
import { CommonModule } from '@angular/common';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ConverstationComponent } from './converstation/converstation.component';
import { NbCardModule, NbListModule, NbUserModule, NbChatModule } from '@nebular/theme';

@NgModule({
    imports: [
        ChatRoutingModule,
        FormsModule,
        RouterModule,
        CommonModule,
        NbCardModule,
        NbListModule,
        NbUserModule,
        NbChatModule
    ],
    declarations: [
        ChatComponent,
        ChatListComponent,
        ChatDetailComponent,
        ConverstationComponent
    ],
})
export class ChatModule { }
