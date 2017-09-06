import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';

import { SharedModule } from 'app/shared';
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
    DpDatePickerModule,
  ],
  declarations: [
    AuthComponent,
  ],
  exports: [
  ]
})
export class AuthModule { }
