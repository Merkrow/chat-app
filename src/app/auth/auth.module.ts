import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { AuthComponent } from './auth.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
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
    AuthComponent,
  ],
  exports: [
  ]
})
export class AuthModule { }
