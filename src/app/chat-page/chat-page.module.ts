import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { ChatPageComponent } from './chat-page.component';
import { RoomComponent } from './room/room.component';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';
import { InfoComponent } from './info/info.component';
import { PopupComponent } from './popup/popup.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'chat',
    component: ChatPageComponent,
  },
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    authRouting,
    ReactiveFormsModule,
  ],
  declarations: [
    ChatPageComponent,
    InfoComponent,
    InboxComponent,
    ChatComponent,
    RoomComponent,
    PopupComponent,
  ],
  exports: [
  ]
})
export class ChatPageModule { }
