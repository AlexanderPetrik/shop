import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateMessagesComponent } from './components/validate-messages/validate-messages.component';



@NgModule({
  declarations: [
    ValidateMessagesComponent,
  ],
  imports: [
    CommonModule,
  ],

  exports: [
    ValidateMessagesComponent,
  ]
})
export class SharedModule { }
