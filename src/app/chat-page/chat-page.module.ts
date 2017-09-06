import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';
import { ChatPageComponent } from './chat-page.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ChatComponent } from './chat/chat.component';
import { InboxComponent } from './inbox/inbox.component';
import { InfoComponent } from './info/info.component';
import { PopupComponent } from './popup/popup.component';
import { RoomComponent } from './rooms/room/room.component';
import { FriendsComponent } from './friends/friends.component';

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
    RoomsComponent,
    PopupComponent,
    RoomComponent,
    FriendsComponent,
  ],
  exports: [
  ]
})
export class ChatPageModule { }
