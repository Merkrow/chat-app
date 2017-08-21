import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { ChatPageModule } from './chat-page/chat-page.module';
import { RegistrationModule } from './registration/registration.module';
import { SharedModule } from './shared';

import { UserService, ApiService, JwtService, SocketService } from './shared';

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
    RegistrationModule,
  ],
  providers: [
    UserService,
    ApiService,
    JwtService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
