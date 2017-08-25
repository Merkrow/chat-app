import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DpDatePickerModule } from 'ng2-date-picker';

import { RegistrationComponent } from './registration.component';

const regRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'registration',
    component: RegistrationComponent,
  },
]);

@NgModule({
  imports: [
    CommonModule,
    regRouting,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule,
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
