import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { ChatPageModule } from './chat-page/chat-page.module';
import { SharedModule } from './shared';

import {
  UserService,
  ApiService,
  JwtService,
  SocketService,
  RoomService,
  SelectChatService,
  SelectUserService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    rootRouting,
    FormsModule,
    SharedModule,
    AuthModule,
    ChatPageModule,
  ],
  providers: [
    UserService,
    ApiService,
    JwtService,
    SocketService,
    RoomService,
    SelectChatService,
    SelectUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
