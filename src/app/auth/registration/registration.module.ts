import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRouting } from './registration.route';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRouting,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
