import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ChatPageModule } from './chat-page/chat-page.module';
import { RegistrationModule } from './registration/registration.module';
import { SharedModule } from './shared';

import { UserService, ApiService } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    rootRouting,
    ChatModule,
    FormsModule,
    SharedModule,
    AuthModule,
    ChatPageModule,
    RegistrationModule,
  ],
  providers: [
    UserService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
