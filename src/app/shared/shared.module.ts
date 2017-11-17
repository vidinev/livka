import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';

const components = [
  HeaderComponent,
  ControlMessagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...components,

  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
