import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { ChatPageComponent } from './chat-page.component';

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
  ],
  exports: [
  ]
})
export class ChatPageModule { }
